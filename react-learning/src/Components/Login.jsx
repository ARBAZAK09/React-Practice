import React, { useState, useEffect, useRef } from "react";
import { Button, Row, Col, Form, Card } from "react-bootstrap";
import { userdata } from "./Reducers/Config";
import "./Login.css";

export const Login = () => {
  const earlyusername = useRef("");
  const earlypassword = useRef("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isvalid, setisvalid] = useState(true);
  const [issuccess, setissuccess] = useState(false);
  useEffect(() => {
    if (username.length >= 5 && password.length >= 6) {
      setisvalid(false);
      if (
        userdata.username == username.trim() &&
        userdata.password == password.trim()
      ) {
        setissuccess(true);
        localStorage.setItem("token", userdata.token);
      }
    } else setisvalid(true);
  }, [username, password]);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      earlyusername.current.value = localStorage.getItem("username");
      earlypassword.current.focus();
    } else {
      earlyusername.current.focus();
    }
  });

  // earlyusername.current.focus();
  // }, []);

  return (
    <React.Fragment>
      {issuccess ? (
        <p>you are successfully logged in!!</p>
      ) : (
        <div>
          <h1>Login with validation</h1>
          <hr />
          <Card className="Login">
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  onChange={(e) => setusername(e.target.value)}
                  placeholder="username"
                  ref={earlyusername}
                ></Form.Control>
              </Col>
              <Row>
                <Col>
                  <Form.Control
                    type="password"
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder="Password"
                    ref={earlypassword}
                  ></Form.Control>
                </Col>
              </Row>
            </Row>
            <Row>
              <Col lg={6}>
                <Button disabled={isvalid}>Submit</Button>
              </Col>
              <Col lg={6}>
                <Button>Cancel</Button>
              </Col>
            </Row>
            {!issuccess && !isvalid && (
              <p>please enter the correct username or password</p>
            )}
          </Card>
        </div>
      )}
    </React.Fragment>
  );
};

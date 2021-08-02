
import React, { useState } from 'react';
import { Col, Form, Row, Card, Button } from 'react-bootstrap';
import { Form21 } from '../Reducers/Form2/Form21';
import "./Form22.css"

export const Form2 = () => {
    const { firstName, lastName, Line1, Line2, City } = Form21.data[0];

    const [fname, setFname] = useState(firstName);
    const [lname, setLname] = useState(lastName);
    const [line1, setLine1] = useState(Line1);
    const [line2, setLine2] = useState(Line2);
    const [city, setCity] = useState(City);
    return (

        <div>
            <Row>
                <Col md={2}></Col>
                <Col md={4}>
                <Row >
                <Card>
                   
                        <Col>
                            <Form className="my_form">
                                <Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Label>FirstName:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="First Name"
                                                onChange={(e) => setFname(e.target.value)}
                                                value={fname}
                                            ></Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Label>LastName:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Last Name"
                                                onChange={(e) => setLname(e.target.value)}
                                                value={lname}
                                            ></Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Label>Qualification:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Qualification"
                                                onChange={(e) => setLine1(e.target.value)}
                                                value={line1}
                                            ></Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Label>Street:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Street"
                                                onChange={(e) => setLine2(e.target.value)}
                                                value={line2}
                                            ></Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Label>City:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="city"
                                                onChange={(e) => setCity(e.target.value)}
                                                value={city}
                                            ></Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button className="xyz">submit</Button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Form>
                        </Col>
                    
                </Card>
                </Row>
                </Col>

                <Col md={4}>
                   
                    <Row>
                        <Card className="strData">
                        <Col>

                        <img src="image1.jpeg" alt=""></img>
                            <Row>
                                <Col><b>First Name:</b><i>&nbsp;&nbsp;{fname}</i></Col>
                            </Row>
                            <Row>
                                <Col><b>Last Name:</b><i>&nbsp;&nbsp;{lname}</i></Col>
                            </Row>
                            <Row>
                                <Col><b>Qualification:</b><i>&nbsp;&nbsp;{line1}</i></Col>
                            </Row>
                            <Row>
                                <Col><b>Street:</b><i>&nbsp;&nbsp;{line2}</i></Col>
                            </Row>

                            <Row>
                                <Col><b>City:</b><i>&nbsp;&nbsp;{city}</i></Col>
                            </Row>

                        </Col>
                        </Card>
                    </Row>
                </Col>
                <Col md={2}></Col>
            </Row>
        </div>
    );
};


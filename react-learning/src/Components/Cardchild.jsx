import React from "react-bootstrap";
// import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./mario.css";
export const Cardchild = ({ itemcurrent }) => {
  return (
    <div className="pqr">
      <Card className="std">
        <Row>
          <Col md="4">
            <img src={itemcurrent.imgageq} alt=""></img>

            <h4>{itemcurrent.employeeName}</h4>
            <h5>{itemcurrent.employeeid}</h5>
            <h5>{itemcurrent.department}</h5>
            <h5>{itemcurrent.Designation}</h5>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

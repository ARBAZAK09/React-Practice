import React from "react";
import "./Piano.css";
import { Pianochild } from "./Pianochild";
import { Row, Col } from "react-bootstrap";
export const Pianoparent = () => {
  return (
    <div>
      <Row>
        <Col xs="4">
          <h2> LoW </h2>
          <Pianochild></Pianochild>
        </Col>

        <Col xs="4">
          <h2> Medium</h2>
          <Pianochild></Pianochild>
        </Col>

        <Col xs="4">
          <h2> High </h2>
          <Pianochild></Pianochild>
        </Col>
      </Row>
    </div>
  );
};

import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "./Audioplayer.css";

export const Audioplayer = () => {
  const audio = new Audio("jaanemeri.mp3");
  const handleaudioclick = () => {
    audio.play();
  };
  // for audio stop
  const handleaudioclickpause = () => {
    audio.pause();
  };

  return (
    <Card className="player">
      <Row>
        <Col> </Col>
        <Col>
          <Button onClick={handleaudioclick}> PLAY </Button>
        </Col>
        <Col>
          <Button onClick={handleaudioclickpause}> PAUSE </Button>
        </Col>
        <Col></Col>
        <Col>
          <Button
            onMouseDown={handleaudioclick}
            onMouseUp={handleaudioclickpause}
          >
            {" "}
            Replay
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Card>
  );
};

import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./Clock.css";
export const Clock = () => {
  const [sec, usesec] = useState(60);
  const [min, usemin] = useState(60);
  const [hour, usehour] = useState(0);
  setTimeout(() => {
    usesec(sec + 1);
  }, 1000);
  useEffect(() => {
    if (sec == 60) {
      usemin(min + 1);
      usesec(0);
    }
    if (min === 60) {
      usehour(hour + 1);
      usemin(0);
      usesec(0);
    }
  });
  return (
    <Card className="ab">
      <span>
        {hour}: {min}:{sec}
      </span>
    </Card>
  );
};

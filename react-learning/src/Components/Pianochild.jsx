import React from "react";
import { Button } from "react-bootstrap";
import "./Piano.css";
export const Pianochild = () => {
  const handleplay = (bit) => {
    const audio = new Audio(`${bit}.mp3`);
    audio.play();
  };

  document.addEventListener("keypress", (e) => {
    console.log(e.key);
    if (e.key === "a" && handleplay("sa"));
    if (e.key === "s" && handleplay("re"));
    if (e.key === "d" && handleplay("ga"));
    if (e.key === "f" && handleplay("ma"));
    if (e.key === "g" && handleplay("pa"));
    if (e.key === "h" && handleplay("da"));
    if (e.key === "j" && handleplay("ni"));
  });
  return (
    <div>
      <Button
        className="abc"
        onMouseDown={() => handleplay("sa")}
        variant="light"
      >
        SA
      </Button>
      <Button
        className="abc"
        variant="light"
        onMouseDown={() => handleplay("re")}
      >
        RE
      </Button>
      <Button
        className="abc"
        variant="light"
        onMouseDown={() => handleplay("ga")}
      >
        GA
      </Button>
      <Button
        className="abc"
        variant="light"
        onMouseDown={() => handleplay("ma")}
      >
        MA
      </Button>
      <Button
        className="abc"
        variant="light"
        onMouseDown={() => handleplay("pa")}
      >
        PA
      </Button>
      <Button
        className="abc"
        variant="light"
        onMouseDown={() => handleplay("da")}
      >
        DA
      </Button>
      <Button
        className="abc"
        variant="light"
        onMouseDown={() => handleplay("ni")}
      >
        NI
      </Button>
    </div>
  );
};

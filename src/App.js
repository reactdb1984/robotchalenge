import React, { useState } from "react";
import Table from "./Components/table/";
import InputTable from "./Components/InputTable";
const App = () => {
  const [direction, setDirection] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMove = () => {
    if (x > -490 && direction === "East") {
      setX(x - 120);
    }
    if (x < -10 && direction === "West") {
      setX(x + 120);
    }
    if (y > -590 && direction === "North") {
      setY(y - 120);
    }
    if (y < -110 && direction === "South") {
      setY(y + 120);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      {" "}
      <div
        style={{
          minWidth: "600px",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end"
        }}
      >
        <h2>Report:</h2>{" "}
        <h2 style={{ fontWeight: "200" }}>
          {" "}
          Direction {direction} {x === -130 && 2}x axis: {x === -10 && 1}
          {x === -250 && 3}
          {x === -370 && 4}
          {x === -490 && 5} y axis: {y === -110 && 1}
          {y === -230 && 2}
          {y === -350 && 3}
          {y === -470 && 4}
          {y === -590 && 5}{" "}
        </h2>
      </div>
      <Table x={x} y={y} direction={direction} />
    
      <InputTable
        x={x}
        y={y}
        setX={setX}
        setY={setY}
        direction={direction}
        setDirection={setDirection}
      />

      <button onClick={() => handleMove()}>move</button>
    </div>
  );
};

export default App;

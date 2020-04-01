import React from "react";
import WhiteSquare from "./WhiteSquare";
import ColorSquare from "./ColorSquare";

const Table = ({ children, x, y, direction }) => {
  return (
    <>
      {" "}
      {direction === "" || x === 0 || y === 0 ? <h1 style={{position: "absolute", top: "40%", fontWeight: "200", letterSpacing: "7px"}}>Please place the robot</h1>: null}
      <div
        style={{
          backgroundColor: "red",
          maxHeight: "600px",
          minHeight: "600px",
          minWidth: "600px",
          maxWidth: "600px",
          display: "flex",
          flexWrap: "wrap",
          border: "1px solid black"
        }}
      >
        <WhiteSquare />
        <ColorSquare />
        <WhiteSquare />
        <ColorSquare />
        <WhiteSquare />
        <ColorSquare />
        <WhiteSquare />
        <ColorSquare />
        <WhiteSquare />
        <ColorSquare />
        <WhiteSquare />
        <ColorSquare />
        <WhiteSquare />
        <ColorSquare />
        <WhiteSquare />
        <ColorSquare />
        <WhiteSquare />
        <ColorSquare />
        <WhiteSquare />
        <ColorSquare />
        <WhiteSquare />
        <ColorSquare />
        <WhiteSquare />
        <ColorSquare />
        <WhiteSquare /> {children}
      </div>
    </>
  );
};

export default Table;

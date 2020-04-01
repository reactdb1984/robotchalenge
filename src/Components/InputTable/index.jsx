import React from "react";
import IosArrowDropright from "react-ionicons/lib/IosArrowDropright";
import IosArrowDropleft from "react-ionicons/lib/IosArrowDropleft";

const InputTable = ({ direction, setDirection, setX, setY, x, y }) => {
  const handleChangeDirection = event => {
    setDirection(event.target.value);
  };
  const handleChangeX = event => {
    setX(parseInt(event.target.value));
  };
  const handleChangeY = event => {
    setY(parseInt(event.target.value));
  };



  const handleTurnLeft = () => {
    if (direction === "North") {
      setDirection("West");
    }
    if (direction === "West") {
      setDirection("South");
    }
    if (direction === "South") {
      setDirection("East");
    }
    if (direction === "East") {
      setDirection("North");
    }
  };

  const handleTurnRight = () => {
    if (direction === "North") {
      setDirection("East");
    }
    if (direction === "West") {
      setDirection("North");
    }
    if (direction === "South") {
      setDirection("West");
    }
    if (direction === "East") {
      setDirection("South");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          minWidth: "600px"
        }}
      >
        <IosArrowDropleft
        className="arrowButtonLeft"
          fontSize="60px"
          style={{ marginRight: "auto", cursor: "pointer" }}
          onClick={() => handleTurnLeft()}
        />
        <IosArrowDropright
          fontSize="60px"
          style={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={() => handleTurnRight()}
        />
      </div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
        <h2>Place : </h2>{" "}
        <select onChange={handleChangeDirection} style={{maxHeight: "20px"}}>
          <option value={""}> </option>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>
        <h2>X axis: </h2>
        <select onChange={handleChangeX}>
          <option value={""}> </option>
          <option value={-10}>0</option>
          <option value={-10}>1</option>
          <option value={-130}>2</option>
          <option value={-250}>3</option>
          <option value={-370}>4</option>
          <option value={-490}>5</option>
        </select>
        <h2>Y axis: </h2>
        <select onChange={handleChangeY}>
          <option value={""}> </option>
          <option value={-110}>1</option>
          <option value={-230}>2</option>
          <option value={-350}>3</option>
          <option value={-470}>4</option>
          <option value={-590}>5</option>
        </select>
      </div>
    </>
  );
};
export default InputTable;

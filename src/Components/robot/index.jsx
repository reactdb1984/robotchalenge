import React from "react";
import robot from "../../assets/img/robot.png";
const Robot = ({ position, direction, x, y }) => {
  return (
    <>
   
      {direction === "" ||
       x === 0 ||
        y === 0 ? 
          
      null: (
            <img
            className="robot"
            alt=""
              src={robot}
              style={{
                
                maxHeight: `100px`,
                position: "relative",
                top: `${y}px`,
                right: `${x}px`,
                left: ""
              }}
            />)
        }
    </>
  );
};

export default Robot;

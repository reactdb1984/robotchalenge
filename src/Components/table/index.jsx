import React from "react";
import Table from "./table"
import Robot from "../robot";
const TableTop = ({ x, y, direction}) => {
  return (
    <>

  <Table direction={direction} x={x} y={y}>
      <Robot  direction={direction} x={x} y={y}/>
  </Table>
    
    </>
  );
};

export default TableTop;

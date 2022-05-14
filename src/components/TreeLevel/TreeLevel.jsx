import "./TreeLevel.css"
import React, { useState, useLayoutEffect, useEffect } from "react";
import NumberBox from "../NumberBox/NumberBox";

const TreeLevel = ({ level }) => {
  return (
    <div className="row Tree-level">
      {level.map((chunk, idx) => (  //Idk what to say about that, js moment I guess
          <NumberBox key={idx} chunk={chunk ? [chunk.join(" ")] : ["X"]} />
      ))}
    </div>
  );
};

export default TreeLevel;

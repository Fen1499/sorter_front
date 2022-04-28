import "./NumberSequence.css";
import React, { useEffect, useState, useLayoutEffect } from "react";
import NumberBox from "../NumberBox/NumberBox";

const NumberSequence = ({ sequence }) => {
  const createChunks = (s, size) => {
    console.log("creating chunks")
    var arr = [];
    for (var c = 0; c <= Math.floor(s.length / size); c++) {
      var left = c * size;
      var right = Math.min(c * size + 12, s.length);
      arr = arr.concat([s.slice(left, right)]);
    }
    setSequenceChunks(arr);
  };

  const [sequence_chunks, setSequenceChunks] = useState([]);
  useLayoutEffect(() => createChunks(sequence, 12), [sequence]);
  useEffect(() => console.log(sequence_chunks), [sequence_chunks]);

  return (
    <div className="container Number-sequence">
      {sequence_chunks.map((chunk, idx) => {
        return (
          <div key={idx} className="row">
            <NumberBox chunk={chunk}/>
          </div>
        );
      })}
    </div>
  );
};

export default NumberSequence;

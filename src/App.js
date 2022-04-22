import "./App.css";
import NumberForm from "./components/NumberForm/NumberForm";
import NumberSequence from "./components/NumberSequence/NumberSequence";
import React, { useState, useEffect } from "react";

const App = () => {
  const [sequence, setSequence] = useState([]);
  
  const addToSequence = (values) => {
      const intValues = values.map(x => parseInt(x, 10))
      if(intValues.reduce((p, v) => p + v, 0)){
        setSequence(sequence.concat(intValues));
      }
    
  };

  const sortSequence = () => {
    console.log("sorting")
    //Tem que criar uma nova refrence porque js é idiota
    const arr = [].concat(sequence.sort())
    setSequence(arr)
  }

  useEffect(() => console.log(sequence), [sequence]);

  return (
    <div className="Useless">
      <NumberForm triggerEvent={addToSequence} sorter={sortSequence} />
      <NumberSequence sequence={sequence} />
    </div>
  );
};

export default App;

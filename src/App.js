import "./App.css";
import NumberForm from "./components/NumberForm/NumberForm";
import NumberSequence from "./components/NumberSequence/NumberSequence";
import React, { useState, useEffect } from "react";
import { BaseAPI, baseURL } from "./services/Api";

const App = () => {
  const [sequence, setSequence] = useState([]);

  const addToSequence = (values) => {
    const intValues = values.map((x) => parseInt(x, 10));
    if (intValues.reduce((p, v) => p + v, 0)) {
      setSequence(sequence.concat(intValues));
    }
  };

  
  const sortSequence = () => {
    let api = new BaseAPI()
    let response = api.fetchSomething("/sort", "POST", JSON.stringify({arr: sequence}))
    response.then(r => setSequence(r.arr))
  }

  const clearSequence = () => {
    setSequence([])
  }

  // const fallbackSortSequence = () => {
  //   console.log("sorting");
  //   //Tem que criar uma nova reference porque js é idiota
  //   const arr = [].concat(sequence.sort());
  //   setSequence(arr);
  // };
  useEffect(() => {
    fetch(baseURL + "/sort", {method: "POST", body: JSON.stringify({arr: [3,2,1]})})
      .then((resp) => console.log(resp))   
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => console.log(sequence), [sequence]);

  return (
    <div className="Useless">
      <NumberForm triggerEvent={addToSequence} sorter={sortSequence} cleaner={clearSequence} />
      <NumberSequence sequence={sequence} />
    </div>
  );
};

export default App;

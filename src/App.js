import "./App.css";
import NumberForm from "./components/NumberForm/NumberForm";
import NumberSequence from "./components/NumberSequence/NumberSequence";
import NumberTree from "./components/NumberTree/NumberTree";
import React, { useState } from "react";
import { BaseAPI } from "./services/Api";

const App = () => {
  const [sequence, setSequence] = useState([]);
  const [treeComponent, setTreeComponent] = useState([]);

  const addToSequence = (values) => {
    const intValues = values.map((x) => parseInt(x, 10));
    if (intValues.reduce((p, v) => p + v, 0)) {
      setSequence(sequence.concat(intValues));
    }
  };

  const sortSequence = async () => {
    let api = new BaseAPI()
    let response = await api.fetchToJSON("/sort", "POST", JSON.stringify({arr: sequence}))
    //console.log(response)
    setTreeComponent(<NumberTree rawTree={response}/>)
  }

  const clearSequence = () => {
    setSequence([])
  }

  return (
    <div className="Useless">
      <NumberForm triggerEvent={addToSequence} sorter={sortSequence} cleaner={clearSequence} />
      <div className="Unsorted">
       <NumberSequence sequence={sequence} />
      </div>
      <div className="UselessSorted">
        {treeComponent}
      </div>
    </div>  
  );
};

export default App;

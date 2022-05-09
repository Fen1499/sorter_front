import React, { useState, useLayoutEffect, useEffect } from "react";
import NumberSequence from "../NumberSequence/NumberSequence";

import TreeLevel from "../TreeLevel/TreeLevel";

const NumberTree = ({ rawTree }) => {
  
    const treeWritter = (arr) => {
        let n = 0
        let aux = []
        while(n < arr.length) {
            //trick for updating state, because js is broken
            aux = aux.concat([arr.slice(n,(n*2)+1)])
            setTree(aux)
            n = (n*2)+1
        }
    }
    const [tree, setTree] = useState([]);
    useLayoutEffect(() => treeWritter(rawTree), [rawTree])
    useEffect(() => console.log(tree), [tree]);

    return (
        <div className="Number-tree">
            {
               tree.map((smt, idx) =>     
                <div className="container">
                    <TreeLevel level={smt}/>
                </div>)
            }
        </div>
    )
}
  export default NumberTree;
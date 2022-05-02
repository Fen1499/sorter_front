import React, { useState, useLayoutEffect, useEffect } from "react";
import NumberSequence from "../NumberSequence/NumberSequence";


const NumberTree = ({ rawTree }) => {
  
    const treeWritter = (arr) => {
        let n = 0
        let aux = []
        while(n < arr.length) {
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
               tree.map((smt, _) => <div className="level">{smt.map((t, _) => <div className="chunk">{t}</div>)}</div>)
            }
        </div>
    )
}
  export default NumberTree;
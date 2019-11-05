import React, { useState } from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
import { numbers as data } from "../../../data";
import NumberButton from "./NumberButton";

import "./number.scss";

const Numbers = ({ onClick }) => {
  // STEP 2 - add the imported data to state
  const [numbers, setNumbers] = useState(data);
  return (
    <div className="number">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numbers.map(e => (
        <NumberButton key={e} number={e} onClick={onClick} />
      ))}
    </div>
  );
};

export default Numbers;

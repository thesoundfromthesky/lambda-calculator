import React, { useState } from "react";

//import any components needed
import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file
import { operators as data } from "../../../data";

import "./operator.scss";

const Operators = ({ onClick }) => {
  // STEP 2 - add the imported data to state
  const [operators, setOperators] = useState(data);

  return (
    <div className="operator">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {operators.map(({ char, value }) => (
        <OperatorButton
          key={value}
          char={char}
          value={value}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default Operators;

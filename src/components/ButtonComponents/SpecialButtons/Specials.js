import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file
import { specials as data } from "../../../data";

import "./special.scss";

const Specials = ({ onClick }) => {
  // STEP 2 - add the imported data to state
  const [specials, setSpecials] = useState(data);
  return (
    <div className="special">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specials.map(e => (
        <SpecialButton
          onClick={onClick}
          key={e}
          special={e}
        />
      ))}
    </div>
  );
};

export default Specials;

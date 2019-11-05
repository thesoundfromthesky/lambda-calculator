import React from "react";
import "./special.scss";

const SpecialButton = ({ onClick, special }) => {
  const specialButton = () => {
    if (special === "C") onClick(prevState => "");
    else if (special === "+/-") {
      onClick(prevState => {
        if (prevState.includes("+")) {
          return prevState.replace(/\+/, "-");
        } else if (prevState.includes("-")) {
          return prevState.replace(/\-/, "+");
        }
        return prevState;
      });
    } else if (special === "%") {
      onClick(prevState => {
        return prevState + special;
      });
    }
  };
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="specialButton" onClick={specialButton}>{special}</button>
    </>
  );
};

export default SpecialButton;

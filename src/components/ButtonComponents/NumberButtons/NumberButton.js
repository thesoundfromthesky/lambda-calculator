import React from "react";

import { validate } from "../../../util/validate";

import "./number.scss";

const NumberButton = ({ onClick, number }) => {
  return (
    <>
      {/* Display a button element rendering the data
       being passed down from the parent container on props */}
      <button
        className="numberButton"
        data={number}
        onClick={onClick.bind(this, prevState => {
          return prevState + number;
        })}
      >
        {number}
      </button>
    </>
  );
};

export default NumberButton;

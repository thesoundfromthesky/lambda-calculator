import React from "react";

const OperatorButton = ({ onClick, char, value }) => {
  const operate = () => {
    if (value === "=") {
      onClick(prevState => {
        if (prevState === "") return prevState;
        // Add
        if (prevState.includes("+")) {
          return prevState.split("+").reduce((result, e) => {
            return Number(result) + Number(e);
          }).toString();
        }
        if (prevState.includes("-")) {
          // Subtract
          return prevState.split("-").reduce((result, e) => {
            return Number(result) - Number(e);
          }).toString();
        }
        if (prevState.includes("x")) {
          // Subtract
          return prevState.split("x").reduce((result, e) => {
            return Number(result) * Number(e);
          }).toString();
        }
        if (prevState.includes("/")) {
          // Quotient
          return prevState.split("/").reduce((result, e) => {
            return Number(result) / Number(e);
          }).toString();
        }
        if (prevState.includes("%")) {
          // Quotient
          return prevState.split("%").reduce((result, e) => {
            return Number(result) % Number(e);
          }).toString();
        }
        return prevState;
      });
    } else {
      onClick(prevState => {
        if (prevState === "" && !/\d|\-/.test(char)) return prevState;
        if (/[+\-x/]/.test(prevState)) return prevState;
        return prevState + char;
      });
    }
  };
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operatorButton" onClick={operate}>
        {char}
      </button>
    </>
  );
};

export default OperatorButton;

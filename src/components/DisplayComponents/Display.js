import React from "react";

import "./display.scss";

const Display = ({ display }) => {
  return (
    <div className="display center">
      {/* Display any props data here */}
      {display ? display : "0"}
    </div>
  );
};

export default Display;

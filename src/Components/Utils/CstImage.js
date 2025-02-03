import React from "react";

//responsive
const CstImage = ({ to = "", ...props }) => {
  return <img src={to} {...props} />;
};

export default CstImage;

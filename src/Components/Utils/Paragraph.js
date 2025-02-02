import React from "react";

const Paragraph = ({ text, ...props }) => {
  return (
    <p {...props} className="text-body-1">
      {text}
    </p>
  );
};

export default Paragraph;

import React from "react";

const AnimatedSVGIcon = ({ children, ...props }) => {
  return (
    <div {...props} className="animate-float">
      {children}
    </div>
  );
};

export default AnimatedSVGIcon;

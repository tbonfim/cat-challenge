import React from "react";

export default ({ direction, handleClick }) => {
  return (
    <div className="arrow-container">
      <a
        href="#"
        className={direction === "right" ? "arrow right" : "arrow left"}
        onClick={handleClick}
      />
    </div>
  );
};

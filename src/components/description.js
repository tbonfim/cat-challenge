import React from "react";

export default ({ index, total }) => {
  return (
    <div className="description">
      {" "}
      Photo # {index} of {total}
    </div>
  );
};

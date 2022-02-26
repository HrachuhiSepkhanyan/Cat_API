import React from "react";

const CatsCard = ({ cat }) => {
  return (
    <div>
      <div>
        <img src={cat.url} alt="img" width="300px" />
      </div>{" "}
    </div>
  );
};

export default CatsCard;

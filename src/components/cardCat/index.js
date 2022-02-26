import React from "react";

const CatsCard = ({ cat }) => {
  return (
    <div>
      <div>
        <img src={cat.url} alt="img" width="300px" padding="20px" />
      </div>
    </div>
  );
};

export default CatsCard;

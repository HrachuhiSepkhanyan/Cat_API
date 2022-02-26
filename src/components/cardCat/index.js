import React from "react";
import "./style.css";

const CatsCard = ({ cat }) => {
  return (
    // <div>
    <div className="images">
      <img src={cat.url} alt="img" width="300px" />
    </div>
    // </div>
  );
};

export default CatsCard;

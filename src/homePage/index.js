import React from "react";
import "./style.css";

import Categories from "../components/categories";
import CatsBlok from "../components/cats";

const Home = () => {
  return (
    <div className="home">
      <Categories />
      <CatsBlok />
    </div>
  );
};

export default Home;

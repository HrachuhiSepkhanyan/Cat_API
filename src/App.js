import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./homePage";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:id" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

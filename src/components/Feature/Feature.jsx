import React from "react";
import Products from "../Products/Products";
import "./Feature.css";
const Feature = () => {
  return (
    <div className="container feature-sec">
      <h2 className="feature-title">Category</h2>
      <div className="feature-products">
        <Products />
      </div>
    </div>
  );
};

export default Feature;

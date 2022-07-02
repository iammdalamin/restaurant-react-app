import React from "react";
import Hero from "../../components/Hero/Hero";
import Product from "../../components/Product/Product";
import "./Home.css";
export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Hero />
      </div>
      <Product />
    </div>
  );
};

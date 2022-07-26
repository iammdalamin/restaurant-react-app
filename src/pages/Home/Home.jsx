import React from "react";
import Hero from "../../components/Hero/Hero";
import Product from "../../components/Product/Product";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Products from "../../components/Products/Products";
import "./Home.css";
export const Home = () => {
  return (
    <div className=" home">
      <Hero />
      <div className="container feature-products">
        <Products />
      </div>
    </div>
  );
};

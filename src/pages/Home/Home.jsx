import React from "react";
import Feature from "../../components/Feature/Feature";
import Hero from "../../components/Hero/Hero";
import "./Home.css";
export const Home = () => {
  return (
    <div className=" home">
      <Hero />
      <Feature />
    </div>
  );
};

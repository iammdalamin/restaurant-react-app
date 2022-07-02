import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Product.css";

const Product = () => {
  const [prods, setProds] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //   const [prod, setProd] = useState(null);
  const getProduct = async () => {
    setLoading(true);
    axios
      .get("	https://my-burger-api.herokuapp.com/burgers/")
      .then((response) => {
        setProds(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(prods);
  return (
    <>
      {prods.map((prod, i) => (
        <div key={i} className="prod__card">
          <h1>{prod.name}</h1>
        </div>
      ))}

      <h1>Products:{prods.length}</h1>
    </>
  );
};

export default Product;

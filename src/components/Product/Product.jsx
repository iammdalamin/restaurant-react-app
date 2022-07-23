import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "./Product.css";

const Product = () => {
  const [prods, setProds] = useState([]);
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
      {!loading ? (
        prods.map((prod) => {
          const { id, name, description } = prod;
          return (
            <div key={id} className="prod__card">
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          );
        })
      ) : (
        <Skeleton
          baseColor="#000"
          highlightColor="#fff"
          width="15%"
          count={3}
        />
      )}

      <h1>Products:{prods.length}</h1>
    </>
  );
};

export default Product;

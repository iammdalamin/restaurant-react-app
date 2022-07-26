import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import "./Products.css";
const Products = () => {
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //   const [prod, setProd] = useState(null);
  const getProduct = async () => {
    setLoading(true);

    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
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
  return (
    <>
      {!loading ? (
        prods.categories.map((prod) => {
          const { idCategory, strCategory, strCategoryThumb } = prod;
          return (
            <Product
              key={idCategory}
              title={strCategory}
              img={strCategoryThumb}
            />
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
    </>
  );
};

export default Products;

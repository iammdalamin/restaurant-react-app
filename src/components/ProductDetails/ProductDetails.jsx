import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import "./ProductDetails.css";
const ProductDetails = () => {
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { strCategory } = useParams();
  //   const { pathname } = strCategory;
  const getProduct = async () => {
    setLoading(true);

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`;

    axios
      .get(url)
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
        prods.meals.map((prod) => {
          const { strMeal, strMealThumb, idMeal } = prod;
          return <Product key={idMeal} title={strMeal} img={strMealThumb} />;
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

export default ProductDetails;

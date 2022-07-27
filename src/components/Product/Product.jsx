import { useState } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./Product.css";

const Product = ({ title, img }) => {
  const [handler, setHandler] = useState("");
  const clickHandler = (e) => {
    setHandler(e);
  };
  console.log(handler);
  return (
    <>
      {handler ? (
        <ProductDetails title={handler} />
      ) : (
        <div className="product" onClick={() => clickHandler(title)}>
          <div className="prod__card">
            <img src={img} alt="" className="card-img" />
            <div className="card-desc">
              <h1 className="card-title">{title}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;

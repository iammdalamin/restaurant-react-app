import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ title, img }) => {
  return (
    <div>
      <Link to={`/${title}`}>
        <div className="prod__card">
          <img src={img} alt="" className="card-img" />
          <div className="card-desc">
            <h1 className="card-title">{title}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;

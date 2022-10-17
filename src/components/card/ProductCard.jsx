import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../redux/reducer/productReducer";

export default function ProductCard(props) {
  const { product } = props;
  const dispatch = useDispatch();
  return (
    <div className="productcard text-center">
      <div className="card">
        <img src={product.image} alt="product" />
        <h2 style={{ fontSize: "16px", fontWeight: "600", height: "50px"}}>{product.name}</h2>
        <p style={{ fontSize: "16px", fontWeight: "500" }}>${product.price}</p>
        <button
          className="addtocart"
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          Add to cart
        </button>
        <NavLink to={`/detail/${product.id}`} className="detail">
          Detail
        </NavLink>
      </div>
    </div>
  );
}

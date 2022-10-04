import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductCard(props) {
  const { product } = props;
  console.log(product);

  return (
    <div className="productcard text-center">
      <div className="card">
        <img src={product.image} alt="product" />
        <h2 style={{ fontSize: "16px", fontWeight: "600" }}>{product.name}</h2>
        <p style={{ fontSize: "16px", fontWeight: "500" }}>${product.price}</p>
        <button className="addtocart">Add to cart</button>
        <NavLink to={`/detail/${product.id}`} className="detail">
          Detail
        </NavLink>
      </div>
    </div>
  );
}

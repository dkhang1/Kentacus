import React from "react";
import bg from "../assets/img/bg.jpg";

export default function Cart() {
  return (
    <section className="cart">
      <div className="page-heading">
        <img src={bg} alt="..." />
        <div className="container">
          <div className="page-title">
            <h1>Cart</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

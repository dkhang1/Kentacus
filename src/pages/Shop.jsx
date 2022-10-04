import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import bg from "../assets/img/bg.jpg";
import ProductCard from "../components/card/ProductCard";
import { getProductApi } from "../redux/reducer/productReducer";
export default function Shop() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductApi());
  }, []);

  const renderCardProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductCard product={item} />
        </div>
      );
    });
  };

  return (
    <section className="shop">
      <div className="page-heading">
        <img src={bg} alt="..." />
        <div className="container">
          <div className="page-title">
            <h1>Products</h1>
          </div>
        </div>
      </div>

      <div className="products py-5">
        <div className="container">
          <div className="sort d-flex justify-content-between">
            <p className="result">Showing all {arrProduct.length} results</p>
            <form action=""></form>
          </div>
          <div className="items">
            <div className="row">{renderCardProduct()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

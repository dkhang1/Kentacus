import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bg from "../assets/img/bg.jpg";
import ProductCard from "../components/card/ProductCard";
import {
  getProductApi,
  getSearchProductApi,
} from "../redux/reducer/productReducer";
import _ from "lodash";
import { useParams } from "react-router-dom";

export default function Shop() {
  const { arrProduct, arrSearch } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();
  const params = useParams();
  console.log(arrSearch);
  useEffect(() => {
    dispatch(getProductApi());
  }, []);

  useEffect(() => {
    const { name } = params;
    dispatch(getSearchProductApi(name));
    console.log(arrSearch);
    console.log(name);
  }, [params.name]);

  const renderCardProduct = () => {
    if (params.name === undefined) {
      return arrProduct.map((item, index) => {
        return (
          <div className="col-3" key={index}>
            <ProductCard product={item} />
          </div>
        );
      });
    } else {
      return arrSearch.map((item, index) => {
        return (
          <div className="col-3" key={index}>
            <ProductCard product={item} />
          </div>
        );
      });
    }
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
          <div className="sort d-flex justify-content-between align-items-center">
            <p className="m-0 result">Showing all {arrProduct.length} results</p>
            <select className="sorting" onChange={(e) => {}}>
              <option defaultValue="default">Default sorting</option>
              <option value="lowtohigh">Sort by price: low to high</option>
              <option value="hightolow">Sort by price: high to low</option>
            </select>
          </div>
          <div className="items py-4">
            <div className="row">{renderCardProduct()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

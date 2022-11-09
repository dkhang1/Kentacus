import { Button, Select } from "antd";
import React from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  changeQuantityCartMobile,
  removeFromCart,
} from "../../redux/reducer/productReducer";

export default function TableProfileMobile(props) {
  const { arrProduct } = props;
  console.log(arrProduct);
  const renderItem = () => {
    return arrProduct.map((product, index) => {
      return (
        <div className="cart-item d-flex" key={product.id}>
          <div className="cart-item-img col-3">
            <img src={product.image} alt="product" />
          </div>
          <div className="cart-item-info col-9">
            <div className="d-flex justify-content-between">
              <div className="info">
                <div className="name">
                  <NavLink to={`/detail/${product.id}`}>{product.name}</NavLink>
                </div>
                <div className="quantity">
                  <label htmlFor="quantity">Quantity</label>
                  <Button>{product.quantity} </Button>
                </div>
              </div>
              <div className="price">{product.price}$</div>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="cart-mobile">{renderItem()}</div>;
}

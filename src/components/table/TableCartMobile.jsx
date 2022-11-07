import { Select } from "antd";
import React from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  changeQuantityCartMobile,
  removeFromCart,
} from "../../redux/reducer/productReducer";

export default function TableCartMobile(props) {
  const { arrProduct } = props;
  const dispatch = useDispatch();

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
                  <Select
                    defaultValue={product.quantityBuy}
                    onChange={(e) => {
                      const data = { quantity: e, id: product.id };
                      dispatch(changeQuantityCartMobile(data));
                    }}
                    options={[
                      {
                        value: 1,
                        label: 1,
                      },
                      {
                        value: 2,
                        label: 2,
                      },
                      {
                        value: 3,
                        label: 3,
                      },
                      {
                        value: 4,
                        label: 4,
                      },
                      {
                        value: 5,
                        label: 5,
                      },
                      {
                        value: 6,
                        label: 6,
                      },
                      {
                        value: 7,
                        label: 7,
                      },
                      {
                        value: 8,
                        label: 8,
                      },
                      {
                        value: 9,
                        label: 9,
                      },
                      {
                        value: 10,
                        label: 10,
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="price">
                {product.price * product.quantityBuy}$
              </div>
            </div>
            <div className="action">
              <i class="fa-regular fa-heart me-3"></i>
              <i
                class="fa-solid fa-trash-can"
                onClick={() => {
                  dispatch(removeFromCart(product.id));
                }}
              ></i>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="cart-mobile">{renderItem()}</div>;
}

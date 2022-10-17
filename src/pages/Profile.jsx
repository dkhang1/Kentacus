import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import bg from "../assets/img/bg.jpg";
import UpdateForm from "../components/form/UpdateForm";
import TableProfile from "../components/table/TableProfile";
import { getFavoriteProductApi } from "../redux/reducer/productReducer";
import { getProfileApi } from "../redux/reducer/userReducer";
export default function Profile() {
  const { userLogin } = useSelector((state) => state.userReducer);
  const { arrProductFavorite } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteProductApi());
    dispatch(getProfileApi());
  }, []);

  const renderTable = () => {
    return userLogin?.ordersHistory?.map((orderItem, index) => {
      return (
        <div key={index} className="mt-4 order-history-table">
          <div className="d-flex justify-content-between">
            <p
              style={{
                textAlign: "left",
                color: "#47b5ff",
                margin: 0,
              }}
            >
              Order Id: {orderItem.id}
            </p>
            <p
              style={{
                textAlign: "left",
                color: "#47b5ff",
                marginBottom: 0,
              }}
            >
              Order at: {orderItem.date}
            </p>
          </div>
          <TableProfile arrProduct={orderItem.orderDetail} id={orderItem.id} />
        </div>
      );
    });
  };

  return (
    <section className="profile">
      <div className="page-heading">
        <img src={bg} alt="..." />
        <div className="container">
          <div className="page-title">
            <h1>Profile</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="item d-flex">
            <div className="col-left">
              <img src={userLogin.avatar} alt="avatar" />
            </div>
            <div className="col-right">
              <UpdateForm />
            </div>
          </div>
        </div>
        <hr />
        <div className="table">
          <div>
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#order-history"
                  type="button"
                  role="tab"
                >
                  Order History
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#favorite"
                  type="button"
                  role="tab"
                >
                  Favorite
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="order-history"
                role="tabpanel"
                tabIndex={0}
              >
                {renderTable()}
              </div>
              <div
                className="tab-pane fade"
                id="favorite"
                role="tabpanel"
                tabIndex={0}
              >
                <TableProfile arrProduct={arrProductFavorite} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { Navigate } from "react-router-dom";
import bg from "../assets/img/bg.jpg";
import { ACCESS_TOKEN, getStore } from "../util/tools";
import Swal from "sweetalert2";
import TableCart from "../components/table/TableCart";
import { useSelector } from "react-redux";
export default function Cart() {
  const { arrCart } = useSelector((state) => state.productReducer);

  if (!getStore(ACCESS_TOKEN)) {
    //Nếu chưa đăng nhập => Chuyển hướng trang
    Swal.fire({
      icon: "warning",
      title: "Please sign in to access",
    });

    return <Navigate to="/login" />;
  }

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
      <div className="cart-table py-4">
        <div className="container">
          <TableCart arrProduct={arrCart} />
        </div>
      </div>
    </section>
  );
}

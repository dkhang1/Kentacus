import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import bg from "../assets/img/bg.jpg";
import { ACCESS_TOKEN, getStore } from "../util/tools";
import Swal from "sweetalert2";
import TableCart from "../components/table/TableCart";
import { useDispatch, useSelector } from "react-redux";
import { submitOrderApi } from "../redux/reducer/userReducer";
import { useEffect } from "react";
import { history } from "../index.js";
import TableCartMobile from "../components/table/TableCartMobile";
export default function Cart() {
  const { arrCart } = useSelector((state) => state.productReducer);
  const { userLogin } = useSelector((state) => state.userReducer);
  const [screen, setScreen] = useState({ width: window.innerWidth });
  const dispatch = useDispatch();
  const orderArr = [];
  for (let orderDetail of arrCart) {
    orderArr.push({
      productId: orderDetail.id,
      quantity: orderDetail.quantityBuy,
    });
  }

  useEffect(() => {
    //khi người dùng resize
    let resizeFunction = () => {
      //lấy ra kích thước mới của window
      setScreen({ width: window.innerWidth});
    };

    window.onresize = resizeFunction;
    return () => {
      window.removeEventListener("resize", resizeFunction);
    };
  }, []);




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
          {screen.width >= 754 ? (
            <TableCart arrProduct={arrCart} />
          ) : (
            <TableCartMobile arrProduct={arrCart} />
          )}
        </div>
      </div>
      <div className="submit-order pb-5 text-end">
        <div className="container">
          <button
            onClick={() => {
              if (!getStore(ACCESS_TOKEN)) {
                //Nếu chưa đăng nhập => Chuyển hướng trang
                Swal.fire({
                  icon: "warning",
                  title: "Yêu cầu đăng nhập để đặt hàng",
                });

                history.push("/login");
              } else {
                const order = { orderDetail: orderArr, email: userLogin.email };
                dispatch(submitOrderApi(order));
              }
            }}
          >
            Submit order
          </button>
        </div>
      </div>
    </section>
  );
}

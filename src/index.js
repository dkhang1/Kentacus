import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import "./assets/scss/style.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route } from "react-router-dom";
// redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
//Cấu hình history (Chuyển hướng không cần hook navigate)
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="shop" element={<Shop />}>
            <Route path=":name"></Route>
          </Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo/blackLogo.png";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const { userLogin } = useSelector((state) => state.userReducer);
  const { arrCart } = useSelector((state) => state.productReducer);
  const [mobile, setMobile] = useState(false);
  const totalQuantity = arrCart.reduce((total, item, index) => {
    return (total += item.quantityBuy);
  }, 0);

  const renderLogin = () => {
    if (userLogin === null) {
      return (
        <div>
          <NavLink to="/login">Sign in</NavLink>
          <span className="p-2">/</span>
          <NavLink to="/register">Sign up</NavLink>
        </div>
      );
    } else {
      return (
        <NavLink to="/profile">
          <div className="profile-circle">
            <img src={userLogin.avatar} alt="..." />
          </div>
        </NavLink>
      );
    }
  };

  return (
    <header className="header">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img className="img-fluid" src={logo} alt="logo" width={150} />
        </div>
        <div className="header-nav">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/shop">
                Shop
              </NavLink>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="search-cart d-flex align-items-center">
          <form className="search-bar">
            <input
              className="search-bar-input"
              type="text"
              placeholder="Search ..."
            />
            <button type="submit" className="search-bar-submit"></button>
          </form>
          <NavLink to="/cart" className="cart-icon text-dark">
            <i class="fa-solid fa-bag-shopping"></i>
            <span className="cart-total">{totalQuantity}</span>
          </NavLink>
        </div>
        <div className="login">{renderLogin()}</div>
        <button
          className="mobile-menu-icon menu-btn"
          onClick={() => {
            setMobile(!mobile);
          }}
        >
          {mobile ? <ImCross /> : <FaBars />}
        </button>

        <ul className={`nav-links-mobile ${mobile ? "d-block" : "d-none"}`}>
          <li className="nav-link">
            <NavLink
              to="/home"
              onClick={() => {
                setMobile(!mobile);
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/"
              onClick={() => {
                setMobile(!mobile);
              }}
            >
              About
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/Shop"
              onClick={() => {
                setMobile(!mobile);
              }}
            >
              Shop
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/"
              onClick={() => {
                setMobile(!mobile);
              }}
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/"
              onClick={() => {
                setMobile(!mobile);
              }}
            >
              Contact
            </NavLink>
          </li>
          {userLogin === null ? (
            <>
              <li className="nav-link signin">
                <NavLink
                  to="/login"
                  onClick={() => {
                    setMobile(!mobile);
                  }}
                >
                  Sign In
                </NavLink>
              </li>
              <li className="nav-link signup">
                <NavLink
                  to="/register"
                  onClick={() => {
                    setMobile(!mobile);
                  }}
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-link profile">
                <NavLink to="/profile">Hi! {userLogin.name}</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}

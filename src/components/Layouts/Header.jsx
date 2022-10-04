import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo/blackLogo.png";
export default function Header() {
  return (
    <header className="header">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={logo} alt="logo" width={150} />
        </div>
        <div className="header-nav">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/home" aria-current="page">
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
          <div className="cart-icon">
            <i class="fa-solid fa-bag-shopping"></i>
            <span className="cart-total">1</span>
          </div>
        </div>
        <div className="login">
          <NavLink to="/login">Sign in</NavLink>
          <NavLink to="/register">Sign up</NavLink>
        </div>
      </div>
    </header>
  );
}

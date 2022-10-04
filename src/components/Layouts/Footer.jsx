import React from "react";

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="footer-infobox text-center">
          <h3>JOIN OUR NEWSLETTER</h3>
          <div className="infobox">
            <form>
              <input type="text" placeholder="Enter Your Email" />
              <button>SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div className="footer-brandinfo text-start">
          <div className="row">
            <div className="col-3">
              <h3>About us</h3>
              <p>
                Maecen ligul ligula, pulvin vel metus eget, aucticoni vallis
                magina. Cras ornar ey aliquam lacnia. Nulam and mattis
                temporipsum vitaee viverraulla congue ipsum in ante rutrum.
              </p>
            </div>
            <div className="col-3">
              <ul>
                <h3>My Account</h3>
                <li>
                  <a href="#">Cart</a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
                <li>
                  <a href="#">My account</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Refund and Returns Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <h3>Information</h3>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <h3>Customer Services</h3>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Refund and Returns Policy</a>
                </li>
                <li>
                  <a href="#">Guarantee</a>
                </li>
                <li>
                  <a href="#">Refunds & Compensation</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProductCard from "../components/card/ProductCard";
import CarouselModel from "../components/carousel/CarouselModel";
import { getProductApi } from "../redux/reducer/productReducer";

export default function Home() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const arrBestSeller = [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductApi());
  }, []);
  console.log(arrProduct);
  // lấy 4 phần tử trong mảng làm best seller
  for (let i = 0; i < 4; i++) {
    arrBestSeller.push(arrProduct[i]);
  }

  const renderCardProduct = (arrProduct) => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductCard product={item} />
        </div>
      );
    });
  };

  console.log(arrBestSeller);
  return (
    <div className="home">
      {/* carrousel */}
      <section className="carousel">
        <div className="container">
          <div className="row align-items-center">
            <div className="carousel-content col-6">
              <div className="title">The New Shoes Collection</div>
              <div className="slidedesc">
                Praese feugiat placerat levolut pavehicula placerat raese
                feugiat
              </div>
              <div className="slidebtn">
                <NavLink classname="slidelink" to="/shop">
                  Discover More
                </NavLink>
              </div>
            </div>
            <div className="col-6">
              <CarouselModel arrProduct={arrProduct} />
            </div>
          </div>
        </div>
      </section>

      <section className="best-seller">
        <div className="container">
          <div className="section-title">
            <h1>Best Sellers</h1>
            <p>Sports Shoes</p>
          </div>
          <div className="best-seller-product py-4">
            <div className="row">{renderCardProduct(arrBestSeller)}</div>
          </div>
        </div>
      </section>

      <section className="dealofday">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <img
                src="https://sktperfectdemo.com/themepack/gbshoes/wp-content/uploads/2022/07/deal-shoe-img-1.png"
                alt="..."
              />
            </div>
            <div className="col-6">
              <div className="section-title text-start">
                <h2>Deal of the day</h2>
                <p>Sale Rexoo Mens Shoes</p>
              </div>
              <p className="text">
                Donec consequat ultrices neque, ac scelerisq nulla varius at.
                Praesent tortor libero.
              </p>
              <ul className="count-down">
                <li className="days">
                  30 <span>Days</span>
                </li>
                <li className="hours">
                  2 <span>Hours</span>
                </li>
                <li className="minutes">
                  52 <span>Minutes</span>
                </li>
                <li className="seconds">
                  12 <span>Seconds</span>
                </li>
              </ul>
              <NavLink className="shopnow" to="/shop">
                Shop Now
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="guarantee">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="item d-flex item1">
                <div className="item-img">
                  <img
                    src="https://sktperfectdemo.com/themepack/gbshoes/wp-content/uploads/2022/07/shipping-list1-1.jpg"
                    alt="..."
                  />
                </div>
                <div className="item-content">
                  <h3 className="guarantee-title">shipping worldwide</h3>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="item d-flex item2">
                <div className="item-img">
                  <img
                    src="https://sktperfectdemo.com/themepack/gbshoes/wp-content/uploads/2022/07/shipping-list2-1.jpg"
                    alt="..."
                  />
                </div>
                <div className="item-content">
                  <h3 className="guarantee-title">Free return</h3>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="item d-flex item2">
                <div className="item-img">
                  <img
                    src="https://sktperfectdemo.com/themepack/gbshoes/wp-content/uploads/2022/07/shipping-list3-1.jpg"
                    alt="..."
                  />
                </div>
                <div className="item-content">
                  <h3 className="guarantee-title">order tracking</h3>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="item d-flex item3">
                <div className="item-img">
                  <img
                    src="https://sktperfectdemo.com/themepack/gbshoes/wp-content/uploads/2022/07/shipping-list4-1.jpg"
                    alt="..."
                  />
                </div>
                <div className="item-content">
                  <h3 className="guarantee-title">Fast delivery</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shoes-type">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="item">
                <div className="item-img">
                  <img
                    src="https://sktperfectdemo.com/themepack/gbshoes/wp-content/uploads/2022/07/shoes-img1-1.jpg"
                    alt=""
                  />
                  <div className="item-title">
                    <h2>Men's Shoes</h2>
                    <p>From $80.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="item">
                <div className="item-img">
                  <img
                    src="https://sktperfectdemo.com/themepack/gbshoes/wp-content/uploads/2022/07/shoes-img2-1.jpg"
                    alt=""
                  />
                  <div className="item-title">
                    <h2>Women's Shoes</h2>
                    <p>From $80.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="item">
                <div className="item-img">
                  <img
                    src="https://sktperfectdemo.com/themepack/gbshoes/wp-content/uploads/2022/07/shoes-img3-1.jpg"
                    alt=""
                  />
                  <div className="item-title">
                    <h2>Sports Shoes</h2>
                    <p>From $80.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-arrivals">
        <div className="container">
          <div className="section-title">
            <h1>New</h1>
            <p>Arrivals</p>
          </div>
          <div className="row py-4">{renderCardProduct(arrProduct)}</div>
        </div>
      </section>

      <section className="sale-off">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="sale-off-content">
                <h2>RUNNING SHOES SALE OFF 50%</h2>
                <p>
                  Craesent quis sapien id urna scelerisque tempor. Pellentesque
                  quis accumsan equis dictum ligula. Oraesent rhoncus.
                </p>
                <NavLink to="/shop">Shop Now</NavLink>
              </div>
            </div>
            <div className="col-6">
              <div className="sale-off-img">
                <img
                  src="https://sktperfectdemo.com/themepack/gbshoes/wp-content/uploads/2022/07/sale-shoe-1.png"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="feedback">
                <div className="section-title text-start">
                  <h2>Testimonials</h2>
                  <p>What Our Customers Say About Us</p>
                </div>
                <p className="text">
                  Craesent quis sapien id urna scelerisque temporings
                  Pellentesque quis accumsan equis dictum ligula and Oraesent
                  rhoncus magn eturna viverra etdictum into Pellentesque quis
                  accumsan equis dictum ligula and nisl malesuada. Morbi
                  accumsan.
                </p>
                <div className="customer d-flex align-items-center">
                  <div className="customer-icon">
                    <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" />
                  </div>
                  <div className="customer-name ms-3">
                    <h3>Jennifer Doe</h3>
                    <p>Customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 px-5">
              <div className="value">
                <div className="value-type d-flex align-items-center ">
                  <div className="value-type-img">
                    <img
                      src="https://sktperfectdemo.com/themepack/gbshoes/wp-content/uploads/2022/07/feature-icon1-1.png"
                      alt=""
                    />
                  </div>
                  <div className="value-type-content ms-3">
                    <h3>Great Value</h3>
                    <p>
                      Donec consequat ultrices neque, acsce lerisq nulla varius
                      araesent.
                    </p>
                  </div>
                </div>
                <div className="value-type d-flex align-items-center ">
                  <div className="value-type-img">
                    <img
                      src="https://sktperfectdemo.com/themepack/gbshoes/wp-content/uploads/2022/07/feature-icon2-1.png"
                      alt=""
                    />
                  </div>
                  <div className="value-type-content ms-3">
                    <h3>Worlwide Delivery</h3>
                    <p>
                      Donec consequat ultrices neque, acsce lerisq nulla varius
                      araesent.
                    </p>
                  </div>
                </div>
                <div className="value-type d-flex align-items-center ">
                  <div className="value-type-img">
                    <img
                      src="https://sktperfectdemo.com/themepack/gbshoes/wp-content/uploads/2022/07/feature-icon3-1.png"
                      alt=""
                    />
                  </div>
                  <div className="value-type-content ms-3">
                    <h3>Safe Payment</h3>
                    <p>
                      Donec consequat ultrices neque, acsce lerisq nulla varius
                      araesent.
                    </p>
                  </div>
                </div>
                <div className="value-type d-flex align-items-center ">
                  <div className="value-type-img">
                    <img
                      src="https://sktperfectdemo.com/themepack/gbshoes/wp-content/uploads/2022/07/feature-icon4-1.png"
                      alt=""
                    />
                  </div>
                  <div className="value-type-content ms-3">
                    <h3>24/7 Help Center</h3>
                    <p>
                      Donec consequat ultrices neque, acsce lerisq nulla varius
                      araesent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog"></section>
    </div>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCart,
  addToCartDetail,
  changeQuantity,
  getDetailApi,
} from "../redux/reducer/productReducer";
import bg from "../assets/img/bg.jpg";
import ProductCard from "../components/card/ProductCard";
export default function Detail() {
  const { detailProduct, quantityBuy } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    let { id } = params;
    dispatch(getDetailApi(id));
  }, [params.id]);

  const handleSubmit = (e) => {
    e.preventdefault();
  };

  const renderProduct = () => {
    return (
      <div className="row">
        <div className="col-6 img">
          <img src={detailProduct.image} alt="..." />
        </div>
        <div className="col-6 info">
          <h1 className="title">{detailProduct.name}</h1>
          <p className="price">${detailProduct.price}</p>
          <p className="shortDescription">{detailProduct.description}</p>
          <div className="quantity d-flex align-items-center">
            <input
              defaultValue={quantityBuy}
              className="quantity-input"
              type="number"
              min={1}
              onChange={(e) => {
                dispatch(changeQuantity(e));
              }}
            />
            <button
              className="addProduct"
              onClick={() => {
                dispatch(addToCartDetail(detailProduct));
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderRelatedProduct = () => {
    return detailProduct.relatedProducts?.map((item, index) => {
      return (
        <div class="col-4 mt-5" key={index}>
          <ProductCard product={item} />
        </div>
      );
    });
  };

  return (
    <section className="detail">
      <div className="page-heading">
        <img src={bg} alt="..." />
        <div className="container">
          <div className="page-title">
            <h1>{detailProduct.name}</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="product-info">{renderProduct()}</div>
        <div className="product-description">
          <div className="title">
            <span>Description</span>
          </div>
          <div className="content">
            <p>{detailProduct.description}</p>
          </div>
        </div>
        <div className="related-product">
          <div className="title">
            <h2>Related Products</h2>
          </div>
          <div className="row">{renderRelatedProduct()}</div>
        </div>
      </div>
    </section>
  );
}

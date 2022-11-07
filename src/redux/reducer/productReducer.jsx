import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getStoreJson, http, setStoreJson } from "../../util/tools";

const initialState = {
  arrProduct: [],
  detailProduct: {},
  arrCart: [],
  quantityBuy: 1,
  arrProductFavorite: [],
  arrSearch: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getAllProduct: (state, action) => {
      state.arrProduct = action.payload;
    },
    getSearchProduct: (state, action) => {
      state.arrSearch = action.payload;
    },
    getArrSearch: (state, action) => {
      state.arrSearch = action.payload;
    },
    getProductFavorite: (state, action) => {
      state.arrProductFavorite = action.payload;
    },
    getDetailProduct: (state, action) => {
      state.detailProduct = action.payload;
    },
    addToCartDetail: (state, action) => {
      let index = state.arrCart.findIndex(
        (pro) => pro.id === action.payload.id
      );
      if (index !== -1) {
        state.arrCart[index].quantityBuy += state.quantityBuy;
      } else {
        let quantityBuy = state.quantityBuy;
        state.arrCart.push({ ...action.payload, quantityBuy });
      }
      setStoreJson("arrCart", state.arrCart);
    },
    addToCart: (state, action) => {
      let index = state.arrCart.findIndex(
        (pro) => pro.id === action.payload.id
      );
      if (index !== -1) {
        state.arrCart[index].quantityBuy += 1;
      } else {
        state.arrCart.push({ ...action.payload, quantityBuy: 1 });
      }
      setStoreJson("arrCart", state.arrCart);
    },
    changeQuantity: (state, action) => {
      if (action.payload) {
        state.quantityBuy += 1;
      } else {
        if (state.quantityBuy > 1) {
          state.quantityBuy -= 1;
        }
      }
    },
    changeQuantityCart: (state, action) => {
      let { type, id } = action.payload;
      let index = state.arrCart.findIndex((pro) => pro.id === id);
      if (type) {
        state.arrCart[index].quantityBuy += 1;
      } else {
        if (state.arrCart[index].quantityBuy > 1) {
          state.arrCart[index].quantityBuy -= 1;
        } else {
          state.arrCart.splice(index, 1);
        }
      }
    },
    changeQuantityCartMobile: (state, action) => {
      let { quantity, id } = action.payload;
      let index = state.arrCart.findIndex((pro) => pro.id === id);
      state.arrCart[index].quantityBuy = quantity;
    },
    removeFromCart: (state, action) => {
      state.arrCart = state.arrCart.filter((pro) => pro.id !== action.payload);
      setStoreJson("arrCart", state.arrCart);
    },
    arrCartReset: (state, action) => {
      state.arrCart = [];
      setStoreJson("arrCart", state.arrCart);
    },
  },
});

export const {
  getAllProduct,
  getDetailProduct,
  addToCart,
  addToCartDetail,
  changeQuantity,
  changeQuantityCart,
  removeFromCart,
  arrCartReset,
  getProductFavorite,
  getArrSearch,
  changeQuantityCartMobile
} = productReducer.actions;

export default productReducer.reducer;

// ---------------API---------------------
export const getProductApi = () => {
  return async (dispatch) => {
    try {
      const result = await http.get("/product");
      dispatch(getAllProduct(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
export const getSearchProductApi = (name) => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/product?keyword=${name}`);
      dispatch(getArrSearch(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
export const getDetailApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/product/getbyid?=${id}`);
      dispatch(getDetailProduct(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
export const getFavoriteProductApi = () => {
  return async (dispatch) => {
    try {
      const result = await http.get("/users/getproductfavorite");
      dispatch(getProductFavorite(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};

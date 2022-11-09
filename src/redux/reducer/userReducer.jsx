import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJson,
  http,
  setCookie,
  setStore,
  setStoreJson,
  USER_LOGIN,
} from "../../util/tools";
import { history } from "../../index";
import { arrCartReset } from "./productReducer";
import Swal from "sweetalert2";

const initialState = {
  userLogin: getStoreJson(USER_LOGIN), // null or object
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getProfileAction: (state, action) => {
      state.userLogin = action.payload;
    },
    signout: (state, action) => {
      state.userLogin = null;
      localStorage.clear(ACCESS_TOKEN);
      localStorage.clear(USER_LOGIN);
      Swal.fire({
        icon:"success",
        title: "Đăng xuất thành công"
      })
    },
  },
});

export const { getProfileAction, signout } = userReducer.actions;

export const { updateAction } = userReducer.actions;

export default userReducer.reducer;

export const registerApi = (userSignUp) => {
  // Including email, name, password, gender, phone
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        method: "POST",
        responseType: "JSON",
        data: userSignUp,
      });

      // Success => Save data in localstorage or cookie
      console.log(result);
      setCookie(ACCESS_TOKEN, result.data.content.accessToken, 30);

      setStore(ACCESS_TOKEN, result.data.content.accessToken);

      // Move to Profile page after logging in successfully
      history.push("/register");

      // After logging in successfully => dispatch action getProfile
      dispatch(getProfileApi());
    } catch (err) {
      console.log();
    }
  };
};

export const loginApi = (userLogin) => {
  // Including email and password
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: userLogin,
      });
      // Success => Save data in localstorage or cookie
      console.log(result);
      setCookie(ACCESS_TOKEN, result.data.content.accessToken, 30);

      setStore(ACCESS_TOKEN, result.data.content.accessToken);

      // Move to Profile page after logging in successfully
      history.push("/home");

      // After logging in successfully => dispatch action getProfile
      dispatch(getProfileApi());
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProfileApi = (accessToken = getStore(ACCESS_TOKEN)) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/getProfile",
        method: "POST",
        data: "body",
        headers: {
          // Default data submitted
          Authorization: "Bearer " + accessToken,
        },
      });

      // Get Profile info => Push to redux
      const action = getProfileAction(result.data.content);
      dispatch(action);

      // Save in storage
      setStoreJson(USER_LOGIN, result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateApi = (updateInfo) => {
  //Including email, name, password, gender, phone
  return async (dispatch) => {
    try {
      const result = await http.post("/users/updateProfile", updateInfo);

      Swal.fire({
        title: `Cập nhật ${result.data.content}`,
        icon: "success",
      });
      dispatch(getProfileApi());
    } catch (err) {
      console.log(err);
    }
  };
};

/// order
export const submitOrderApi = (order) => {
  return async (dispatch) => {
    try {
      const result = await http.post("/Users/order", order);
      Swal.fire({
        title: "Order thành công",
        icon: "success",
      });
      dispatch(arrCartReset());
    } catch (err) {
      console.log(err);
    }
  };
};

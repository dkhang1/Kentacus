import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginApi } from "../../redux/reducer/userReducer";

export default function LoginForm(props) {
  const dispatch = useDispatch();

  // Get input from form
  const form = useFormik({
    initialValues: {
      //Form's first default input
      email: "",
      password: "",
    },

    validationSchema: Yup.object().shape({
      // Check validation
      email: Yup.string()
        .required("Email is required!")
        .email("Email is not in the correct format!"),
      password: Yup.string().required("Password is required!"),
    }),

    onSubmit: (values) => {
      // console.log(values);
      dispatch(loginApi(values));
    },
  });

  return (
    <div className="login-container my-5">
      <form
        id="loginForm"
        action=""
        className="d-block"
        onSubmit={form.handleSubmit}
      >
        <div className="row">
          <div className="col-5 form-group">
            <div className="item">
              <label htmlFor="">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Email"
                required
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.errors.email ? (
                <span className="text-danger">{form.errors.email}</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5 form-group">
            <div className="item">
              <label htmlFor="">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Password"
                required
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.errors.password ? (
                <span className="text-danger">{form.errors.password}</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5 form-group">
            <div className="item-3">
              <NavLink to="/register">
                Sign up now?
              </NavLink>
              <button className="signin">Sign in</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

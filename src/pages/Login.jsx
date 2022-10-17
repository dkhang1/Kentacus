import React from "react";
import LoginForm from "../components/form/LoginForm";
import bg from "../assets/img/bg.jpg";

export default function Login() {
  return (
    <section className="login">
      <div className="page-heading">
        <img src={bg} alt="..." />
        <div className="container">
          <div className="page-title">
            <h1>Sign In</h1>
          </div>
        </div>
      </div>
      <div className="loginform">
        <div className="container">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

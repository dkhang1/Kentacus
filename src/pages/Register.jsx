import React from "react";
import RegisterForm from "../components/form/RegisterForm";
import bg from "../assets/img/bg.jpg";

export default function Register() {
  return (
    <section className="register">
      <div className="page-heading">
        <img src={bg} alt="..." />
        <div className="container">
          <div className="page-title">
            <h1>Sign Up</h1>
          </div>
        </div>
      </div>
      <div className="register-form">
        <div className="container">
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}

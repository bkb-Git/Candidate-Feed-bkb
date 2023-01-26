import React, { useEffect, useState } from "react";
import blur from "../assets/blur_bg_1.jpeg";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import LogoContra from "../assets/LogoContra";

const Login = ({ title }) => {
  const [value, setValue] = useState(null);
  // API call

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    setValue(value);
  };

  const handleClick = async () => {
    console.log(value);

    try {
      const data = await fetch("http://localhost:5000/api/auth/checkEmail", {
        body: JSON.stringify({ email: value }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const logData = await data.json();

      console.log(logData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return (document.title = title)[title];
  });
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login__bg">
        <img className="login__back-bg" src={blur} alt="" />
      </div>
      <div className="login__banner">
        <LogoContra />
      </div>

      <div className="login__page">
        <div className="login__container">
          <div className="login__container-left">
            <h1 className="login__container-left--title">
              Welcome back to Contra 👋
            </h1>
            <div className="login__container-left--input-cont">
              <label>Email address</label>
              <input
                type="text"
                placeholder="name@email.com"
                required
                onChange={handleChange}
              />
            </div>
            <button
              className="login__container-left--btn"
              onClick={handleClick}
            >
              Log In
            </button>
          </div>
          <div className="login__container-right">
            <img
              src="https://contra.com/static/assets/login@2x.b44e5924.webp"
              alt="Contra"
              className="login__container-right--image"
            />
          </div>
        </div>

        <div className="signup__container">
          <p className="signup__container-text">
            New to Contra? Join our commision-free platform
          </p>
          <button
            onClick={() => navigate("/sign-up")}
            className="signup__container-btn"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

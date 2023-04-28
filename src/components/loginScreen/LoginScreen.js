import React, { useState } from "react";
import "./LoginScreen.css";
import logo from "../images/logo.jpeg";
import Button from "@mui/material/Button";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = () => {
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail();
    validatePassword();
    if (!emailError && !passwordError) {
      // submit the form
      console.log("Submitting the form...");
    }
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen-container">
        <div className="loginScreen__container-left">
          <img
            className="loginScreen-wallpaper"
            src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5488.jpg?w=740&t=st=1682658352~exp=1682658952~hmac=d034133823ffcdef8f4aab17dd6a5df76dbf71bb50fe6ce3090d0b148dcac2c5"
            alt=""
          />
        </div>
        <div className="loginScreen__container-right">
          <div className="loginScreen__logo-container">
            <img className="logo" src={logo} alt="logo-image" />
          </div>
          <div className="loginScreen__form-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="email-box"
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <span className="error">{emailError}</span>}
              </div>
              <div className="form-group">
                <input
                  className="password-box"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && (
                  <span className="error">{passwordError}</span>
                )}
              </div>
              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
              <div className="loginScreen__signIn-container">
                <Button type="submit" variant="contained" className="button">
                  Sign In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

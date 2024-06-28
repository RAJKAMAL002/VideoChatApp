// LoginPage.js

import React, { useState } from "react";
import "./LoginPage.css"; // Import the CSS file with provided styles
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., validation, API call)
    if (password !== confirmPassword) return;
    axios
      .post("http://localhost:8082/register", { email, username, password })
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log({ email, username, password, confirmPassword });
  };

  return (
    <div className="screen flex-abs-center">
      <div className="card flex-col flex-abs-center">
        <h1 className="heading">Register</h1>
        <form onSubmit={handleSubmit} className=" flex-abs-center flex-col">
          <input
            type="email"
            className="text-box"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            className="text-box"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            className="text-box"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="text-box"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

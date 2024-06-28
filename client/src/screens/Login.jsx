import React, { useState } from "react";
import "./LoginPage.css"; // Import the CSS file with provided styles
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8082/login", { email, password })
      .then((response) => {
        console.log(response);
        localStorage.setItem("username", response.data.username);
        if (response.data.status) navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log({ email, password });
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
            type="password"
            className="text-box"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

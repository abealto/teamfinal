import React, { useState } from "react";
import API from '../UTILS/API';
import { useNavigate } from "react-router-dom";
import "../stylesheets/signup.css";
import NavBar from "./Login-Signup-Nav";


const SignUp = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  })

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function submitUser(e) {
    e.preventDefault();
    API.createUser(user).then(res => {
      console.log(res)
      navigate("/login")
    })
  }

  return (
    <div>
      <NavBar />
      <form onSubmit={submitUser} class='container form-control-sm'>
        <h3>Sign Up</h3>
        <div className="mb-3">

          <label>Username</label>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            className="form-control"
            placeholder="Username"
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        
        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
          />

        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
    </div>
  );

};

export default SignUp
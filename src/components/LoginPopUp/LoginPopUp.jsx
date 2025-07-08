import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrentState] = useState("Sign up");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-pop-title">
          <h2>{currState} </h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Your Name "
              required
              name=""
              id=""
            />
          )}
          <input type="email" placeholder="Enter Email" required name="" id="" />
          <input type="password" placeholder="Password" required name="" id="" />
          <button>
            {currState === "Sign up" ? "Create Account" : "Login"}
          </button>
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continue, i agree the terms and conditions</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new Account ? <span onClick={()=>setCurrentState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an Account ? <span onClick={()=>setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;

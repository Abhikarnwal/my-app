import React from "react";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Navbar() {

  const { isAuth, toggleAuth }= useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          src="https://www.mockplus.com/enUS/images/nav/logo-red-black.png"
          alt=""
        />
      </div>
      <div className="navbar-list">
        <ul>
          {" "}
          <li>Home</li>
          <li>About</li>
          <li>Contact US</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>

      <div className="navbar-login">
       {isAuth ? <button onClick={()=>{toggleAuth(false)}} >LogOut</button> :<button>Login</button> }

        {isAuth ? " ": <button>Get Started For free</button>}
      </div>
    </div>
  );
}

import React from "react";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { ThemeContext } from "../../Contexts/ThemeContext";

export default function Navbar() {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const { themeStyle, toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className="navbar" style={themeStyle}>
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
        {isAuth ? (
          <button
            onClick={() => {
              toggleAuth(false);
            }}
          >
            LogOut
          </button>
        ) : (
          <button>Login</button>
        )}

        <button onClick={toggleTheme}>
          {" "}
          {theme === "light"  ? "Enable Dark Mode" : "Enable Light Mode " }{" "}
        </button>
      </div>
    </div>
  );
}

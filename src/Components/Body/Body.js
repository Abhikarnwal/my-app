import React, { useState } from "react";
import "./Body.css";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { ThemeContext } from "../../Contexts/ThemeContext";

 
export default function Body() {
  const {themeStyle}=useContext(ThemeContext)

  const { login ,toggleAuth } =useContext(AuthContext)

  const[LoginState,setLoginState]=useState({
    username:'',
    password:''
  })
  

  const handleInput = (e) => {
    const { name, value } = e.target;

    
    setLoginState((prev)=>({...prev,[name]:value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault()
     
    if(login.username === LoginState.username && login.password ===LoginState.password ){

      alert ("Logged In successfully")
      toggleAuth()

    }

   else {
    alert("Invalid Credential")
   }
    

  };

  return (
    <div className="login-container" >
      <form className="login-form" onSubmit={handleSubmit}  style={themeStyle}>
        <h2>Login</h2>
        <label>
          Username :
          <input
            type="text"
            placeholder="Enter your Name"
            name="username"
            onChange={handleInput}
          />
        </label>
        <label>
          Password :
          <input
            type="text"
            placeholder="Enter your Password"
            name="password"
            onChange={handleInput}
          />
        </label>
        <label>
          <input type="submit" />
        </label>
      </form>
    </div>
  );
}

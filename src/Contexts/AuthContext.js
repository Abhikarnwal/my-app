import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [isAuth, setisAuth] = useState(false);

  const [login,setLogin] = useState({
    username:'Abhinav',
    password:'Abhi@123'
  });

  const toggleAuth=()=>{

    setisAuth(!isAuth)
   
  }

  return (
    <AuthContext.Provider value={{ isAuth, setisAuth, toggleAuth ,login, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

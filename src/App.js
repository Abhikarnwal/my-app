import "./App.css";
import Home from "./Components/Home/Home";
import Body from "./Components/Body/Body";
import Navbar from "./Components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "./Contexts/AuthContext";

function App() {
 
  const {isAuth} =useContext(AuthContext)
  return (
    <div className="App">
      <Navbar />

      { isAuth ?   <Home /> : <Body /> }
    
    
    </div>
  );
}

export default App;

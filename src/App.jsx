import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/logIn/Login";
import SignUp from "./components/SignUp/SignUp";
//import { useState } from "react";
function App() {
  //const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <button>
          <Link to="SignUp"> Sign Up</Link>
        </button>
        <button>
          <Link to="logIn"> Log In</Link>
        </button>
        <Routes>
          <Route path="/logIn" element={<Login />}/>
          <Route path="/SignUp" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

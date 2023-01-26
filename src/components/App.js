import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthContext from "../contexts/AuthContext";
import Header from "./Header";
import Footer from "./Footer";
import SignIn from "../pages/SignInPage/SignIn";


function App() {
  const [token, setToken] = useState("");
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}/>
      </Routes>
      </BrowserRouter>
    
    
    </AuthContext.Provider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import SignIn from "../pages/SignInPage/SignIn";
import SignUp from "../pages/SignUpPage/SignUp";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import Cart from "./Cart";
import CheckOut from "./CheckOut"


function App() {
  const [user, setUser] = useState({});
  const [precoTotal,setPrecoTotal] = useState("0")
  return (
    <UserContext.Provider value={{ user, setUser,precoTotal,setPrecoTotal }}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<ProductsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

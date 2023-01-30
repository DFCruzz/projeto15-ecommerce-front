import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import SignIn from "../pages/SignInPage/SignIn";
import SignUp from "../pages/SignUpPage/SignUp";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductsTypePage from "../pages/ProductsPage/ProductTypePage";
import SingleProductPage from "../pages/ProductsPage/SingleProductPage";


function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
           <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<ProductsPage />} />
          <Route path="/products/:type" element={<ProductsTypePage />} />
          <Route path="product/:productId" element={<SingleProductPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

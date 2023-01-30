import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthContext from "../contexts/AuthContext";
import SignIn from "../pages/SignInPage/SignIn";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductsTypePage from "../pages/ProductsPage/ProductTypePage";
import SingleProductPage from "../pages/ProductsPage/SingleProductPage";


function App() {
  const [token, setToken] = useState("");
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<ProductsPage />} />
          <Route path="/products/:type" element={<ProductsTypePage />} />
          <Route path="product/:productId" element={<SingleProductPage />} />
        </Routes>
      </BrowserRouter>


    </AuthContext.Provider>
  );
}

export default App;

// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StorefrontHome from "./pages/StorefrontHome";
import ProductCart from "./pages/ProductCart";
import AddressSelection from "./pages/AddressSelection"; 
import BuyerProfile from './pages/BuyerProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/store" element={<StorefrontHome />} />
        <Route path="/cart" element={<ProductCart />} />
        <Route path="/address" element={<AddressSelection />} /> 
        <Route path="/buyer-profile" element={<BuyerProfile />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Products from "./pages/products";
import Scanner from "./pages/scanner";
import Quiz from "./pages/quiz";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ProductDetails from "./pages/productdetails";
import Wishlist from "./pages/wishlist";
import Checkout from "./pages/checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/scanner" element={<Scanner />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
import Login from "./components/auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Products from "./components/products/Products";
import Productinfo from "./components/products/Productinfo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:product" element={<Productinfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

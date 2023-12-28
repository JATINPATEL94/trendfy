import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ProductState from "./context/productState.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Shop from "./components/Shop.js";
import Product from "./components/Product.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Cart from "./components/Cart.js";

function App() {
  return (
    <ProductState>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/shop/product" element={<Product />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </ProductState>
  );
}

export default App;

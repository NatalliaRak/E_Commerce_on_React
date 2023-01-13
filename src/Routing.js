import React from "react";
import Layout from "./components/Layout.js";
import Store from "./pages/Store.js";
import Cart from "./pages/Cart.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Electronics from "./pages/Electronics.js";
import Jewelery from "./pages/Jewelery.js";
import Man from "./pages/Man.js";
import Woman from "./pages/Woman.js";

export default function Routing() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Store />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="jewelery" element={<Jewelery />} />
          <Route path="women's clothing" element={<Woman />} />
          <Route path="men's clothing" element={<Man />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

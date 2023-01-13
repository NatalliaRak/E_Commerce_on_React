import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { CartProvider } from "./components/Cart.js";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  reportWebVitals()
);
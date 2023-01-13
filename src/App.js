import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Routing from "./Routing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Routing />
      <Footer />
    
    </div>
  );
}

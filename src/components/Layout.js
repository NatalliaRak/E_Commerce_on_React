import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useCart } from "./Cart";

const Layout = () => {
  const items = useCart();

  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">

            <NavLink className='navbar-brand' to="/"><strong>E-Commerce on React</strong></NavLink>
            <NavLink className="" to="/cart">
          <strong>
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color="#0C4C4B" fill="currentColor" className="bi bi-basket busket" viewBox="0 0 16 16">
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
             </svg> {items.length}
             </strong> 
        </NavLink>
            <NavLink className="flex-sm-fill text-sm-center nav-link" to="/">
                Store
            </NavLink> 
            <NavLink className="flex-sm-fill text-sm-center nav-link" to="/electronics">
                 Electronics
            </NavLink>
            <NavLink className="flex-sm-fill text-sm-center nav-link" to="/jewelery">
              Jewelery
            </NavLink>
             <NavLink className="flex-sm-fill text-sm-center nav-link" to="/women's clothing">
               Woman
              </NavLink>
            <NavLink className="flex-sm-fill text-sm-center nav-link" to="/men's clothing">
              Man
            </NavLink>

        </div>
      </nav>
      <Outlet/>
    </header>
  );
};

export default Layout;

import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Navbar</h1>
      <div className="input">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <div>
      <header>
        <a href="/" className="logo">
          SOMEONE
        </a>
        <nav className="navigation">
          <a href="#">Home</a>
          <a href="#exp">Experince</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

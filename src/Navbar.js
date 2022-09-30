import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-name">
        Home
      </a>
      <ul>
        <li>
          <a href="/todolist">Todo List</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

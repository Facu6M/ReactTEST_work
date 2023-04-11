import React from "react";
import styles from "../styles/Header.css"
import { Link, to } from "react-router-dom";

const Header = () => {
  return (
    <header className="container_header">
      <h1>Products Store</h1>
      <nav>
        <ul className="menu">
        <Link to={"/Products"} style={{ textDecoration: 'none' }} ><li>Products</li></Link>
        <Link to={"/SearchProduct"} style={{ textDecoration: 'none' }}><li>Search-PRODUCTS</li></Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

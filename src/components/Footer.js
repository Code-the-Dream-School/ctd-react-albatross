import React from "react";
import style from "../css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <a href="/about" className={style.about}>
        About
      </a>
      <p>Copyright &copy; 2022</p>
    </footer>
  );
};

export default Footer;

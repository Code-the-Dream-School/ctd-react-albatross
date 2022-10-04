import React from "react";
import style from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={style.social}>
        Hello World!
        <img
          src="images/renato-ramos-puma-S4MjllDvauE-unsplash.jpg"
          alt=""
          className={style.img}
        />
        <p className={style.connect}>Want to connect?</p>
        <ul className={style.icons}>
          <li>
            <a
              href="https://github.com/SandovalAmy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/amyjensandoval/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;

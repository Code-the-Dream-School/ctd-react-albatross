import React from "react";
import style from "../css/Header.module.css";

const notepadImage = new URL("../images/notepad.jpg", import.meta.url);

const Header = () => {
  return (
    <div className={style.container_header}>
      <img className={style.headerImage} src={notepadImage} alt="notepad" />
      <h1 className={style.todoList}>Todo List</h1>
    </div>
  );
};

export default Header;

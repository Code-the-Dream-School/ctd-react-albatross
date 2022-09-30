import React from "react";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.body}>
      <h2 className={style.header}>Welcome to my React.js Final Project!</h2>
      <p className={style.p}>
        Through Code the Dream School React Front End Class, I learned how to
        build a Todo app using React. This course utilizes Road to React by
        Robin Wieruch as its learning material, with supplemental assignments
        created by curriculum developers. All of my work throughout the course
        was done in my GitHub repository.
      </p>
      {/* <ul className={style.ul}>
          <li>
            <a href="/todolist">Todo List</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul> */}
    </div>
  );
};

export default Home;

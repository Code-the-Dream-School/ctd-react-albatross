import React from "react";
import style from "./Home.module.css";
import { FaReact } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className={style.welcome}>
        <h2 className={style.header}>
          Welcome to my <br />
          <FaReact /> React.js <br />
          final project!
        </h2>
        <p className={style.p}>
          Through Code the Dream School React Front End Class, I learned how to
          build a Todo app using React. This course utilizes Road to React by
          Robin Wieruch as its learning material, with supplemental assignments
          created by curriculum developers. All of my work throughout the course
          was done in my GitHub repository{" "}
          <a
            href="https://github.com/SandovalAmy/ctd-react-albatross"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
          <br />
          <br />
          To see my Todo app, click <a href="/todolist">here</a>.
        </p>
      </div>
    </>
  );
};

export default Home;

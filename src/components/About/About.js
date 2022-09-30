import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.background}>
      <h1 className={style.header}>About Me</h1>
      <p className={style.p}>
        Hi, I'm Amy! I began learning to code with Code the Dream in January
        2022.
        <br></br>
        <br></br>Pronouns: she/her
      </p>
    </div>
  );
};

export default About;

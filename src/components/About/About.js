import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.background}>
      <img
        src="images/profile-photo-pink.jpg"
        alt="profile"
        className={style.img}
      />
      <h1 className={style.header}>About Me</h1>
      <p className={style.p}>
        Hi, I'm Amy! I began learning to code with Code the Dream in January
        2022. Thanks to Code the Dream School, I have been able to learn HTML,
        CSS, JavaScript, and React.js.
        <br></br>
        <br></br>Pronouns: she/her
      </p>
    </div>
  );
};

export default About;

import React from "react";
import "./about.css";
import myImg from "../../assests/me.png";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about_container container">
        <div className="section_title">
          <span>01.</span> <h4>About</h4>
          <div className="hr" />
        </div>
        <div className="about_container-content">
          <div className="about_container-content-text" data-aos="fade-up">
            <p>
              Hello! My name is olawale a Frontend Engineer with hands on
              project experience developing nice and attractive user friendly
              web applications. Someone with a good grasp of frontend
              technologies.
            </p>
            <p>
              A Bachelor’s Degree holder in Computer Science Education.
              Currently having masters in IT Security at Nottingham, UK. looking
              for an organisation where i can put my skills to use and pivot the
              growth of the engineering team.
            </p>
            <p>Here are few technologies I've been working with recently:</p>
            {/* <ul className="technology-list">
              <li>React</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML</li>
              <li>CSS/Sass</li>
              <li>Github and Git</li>
              <li>Firebase</li>
            </ul> */}
          </div>
          <div className="about_container-content-img">
            <img src={myImg} alt="my img" data-aos="zoom-in-down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

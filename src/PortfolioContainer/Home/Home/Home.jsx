import React from "react";
import Typical from "react-typical";
import './Home.css'
import { Link } from 'react-router-dom'
// import Button from 'react-typical'

export default function Home() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        {/* <Link to='/AboutMe'>About Me</Link> */}
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://github.com/CourtneyAJackson">
              <i className="fa fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/courtney-abriana-jackson/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Courtney</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software Engineer 💻",
                    1000,
                    "Content Creator 🎨",
                    1000,
                    "Entropreneur 👩🏽‍💼",
                    1000,
                    "blah",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Enthusiastic Software Developer with Full Stack Expertese
              </span>
            </span>
          </div>
          <div className="profile-options">
            {/* <button className="primary-button"> Hire Me </button> */}
            <a href="CourtneyJackson.pdf" download='CourtneyJackson.pdf'>
              <button className='highlighted-button'>My Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
}

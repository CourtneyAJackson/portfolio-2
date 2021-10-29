import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <h1 className="project-title">My Projects</h1>
        <div className="project-row">
          <div className="project-1-card">
            <h2>Budget Bubble</h2>
            <p>
              Budget Bubble is an Airtable based React app designed to help
              users track their expenses.
            </p>
            <div className="project-1-logo">
              <div className="budget-bubble-logo">
                <h3 className="buget-title">Budget Bubble</h3>
              </div>
            </div>
            <div className="project-1-button">
              <a href="https://github.com/CourtneyAJackson/Budget-Bubble">
                <button className="highlighted-button">Check it Out!</button>
              </a>
            </div>
          </div>
          <div className="project-2-card">
            <h2>TaCato Truck</h2>
            <p>
              The Tacato Truck is a fictional food truck that
              partners with the ASPCA for cat fostering and adoption. This is a collaborative full stack application that allows users with user authentication. 
            </p>
            <div className="tacato-logo">
              <img
                className="tacato"
                src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631555532/Tactato%20Truck/taco-cat-removebg-preview_sasawz.png"
              />
            </div>
            <div className="project-2-button">
              <a href="https://github.com/CourtneyAJackson/TacatoTruck">
                <button className="highlighted-button">Check it Out!</button>
              </a>
            </div>
          </div>
          <div className="project-3-card">
            <h2>Veritas Wines</h2>

            <p>
              Veritas Wines is a full stack React JS and Ruby on Rails wine
              rating app. This app allows users a full CRUD experience once creating a profile. "In Vino Veritas."
            </p>

            <div className="veritas-logo">
              <img
                className="veritas-logo-image"
                src="https://lh3.googleusercontent.com/pxh0Tw16-XwE7RbbDtyXRMUa00FvbjxVrv2LGRMqHxg00xXIQz-rRJiUzviBiiBCRcUljvWHJY9xv0WoYLQPE611QSfNRKx7SDQiAcCfWO2357K6hGwmXWpboNT8eNL6YUuzR9SF=s200-p-k"
                alt='Veritas Wines logo'
              />
            </div>
            <div className="project-3-button">
              <a href="https://github.com/CourtneyAJackson/Veritas-Wines">
                <button className="highlighted-button">Check it Out!</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

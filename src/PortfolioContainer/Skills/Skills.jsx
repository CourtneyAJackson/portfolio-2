import React from "react";
import './Skills.css'


export default function Skills() {
  return (
   
      <div className="skills-parent">
      <div className="skills-card">
      <div className='software-image'>
              </div>
          <div className='skills-details'>
          <h1 classNam="skills-title">Proficiencies</h1>
          <h2 className='software-title'>Software</h2>
            <div className='list-wrapper'>
              <ul className="software-list">
                <li>JavaScript</li>
                <li>Ruby on Rails</li>
                <li>React JS</li>
                <li>HTML</li>
                <li>Css</li>
                <li>Express</li>
              </ul>
            </div>
           
            {/* <h2 className='interpersonal-title'>Interpersonal Skills </h2>
            <div className='other-list-wrapper'>
              <ul className='other-list'>
                <li>Management</li>
                <li>Team Player</li>
                <li>Outreach programming</li>
              </ul>
          </div> */}
        </div>
      
        </div>
      </div>
    
  );
}

import React from 'react'
import './AboutMe.css'


export default function AboutMe(props) {
  
  return (
    <div className="about-me-container screen-container " id={props.id || ""}>
      <div className="about-me-parent">
       
        <div className='about-me-card'>
        <div className='about-me-details'>
          <h1 className='about-me-title'>
            About Me
          </h1>
          <p className='about-me-description'>
          With a strong passion for community service and outreach, my vegan food business has made healthier food options available to lower income communities for 3 plus years. As a business owner with 6 years of management experience, I bring a people-focused, proactive approach to my work as a software developer. I aim to become a part of a team that holds similar values and can make a difference with advancements in technology.
          </p>
          </div>
          <div className='about-me-image'>
          {/* <img src='https://thumbs.dreamstime.com/b/orange-purple-paint-splash-isolated-white-background-160922333.jpg'/> */}
        </div>
        </div>
        
      </div>
      
    </div>
  )
}

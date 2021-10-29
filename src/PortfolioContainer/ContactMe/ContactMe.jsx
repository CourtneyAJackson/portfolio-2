import React from "react";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <div className="contact-me-container">
      <div className="contact-me-parent">
        <div className="contact-me-card">
          <h1 className="contact-me-title">Contact Me</h1>
          <form action='/contact' name='contact' method='post' className="contact-me-details">
          {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlrHlKyXuddlAhp2B88ndGpSCjSUcXGjx5Q&usqp=CAU'
              align='center'/> */}
            <input type='hidden' name='form-name' value='contact' />
           
          
            <div className="name-input">
              <label>Name</label>
              <input required name="name" type="text" placeholder="Full Name" />
            </div>
            <div className="email-input">
              <label>Email</label>
              <input
                required
                name="email"
                type="text"
                placeholder="Enter Email"
              />
            </div>
            <div className="message-input">
              <label>Message</label>
              <textarea
                required
                name="message"
                type="textarea"
                placeholder="Enter Message"
                cols="30"
                 rows="5"
                multiline
              />
            </div>
            <div className='contact-me-button'>
            <button className="highlighted-button">Submit</button>
            </div>
            {/* <h2 className="contact-info">
              <a href="https://www.linkedin.com/in/courtney-abriana-jackson/">
                <i className="fa fa-linkedin-square"></i>
                <h3>Email: courtney_jackson1989@yahoo.com</h3>
              </a>
            </h2> */}
          
          </form>
          
        </div>
      </div>
    </div>
  );
}

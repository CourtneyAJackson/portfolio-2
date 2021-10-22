// import React from 'react'
import Home from './Home/Home'
import './Home2.css'
import Header from './Header/Header'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'
import ContactMe from '../ContactMe/ContactMe'


export default function Home2() {
  return (
    <div className='home-two-container'>
      <Header/>
      <Home />
      <AboutMe />
      <Skills />
      <ContactMe/>
    </div>
  )
}

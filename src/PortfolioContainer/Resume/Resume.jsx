import React from 'react'
import { useState } from 'react'
import ScrollService from '../../utilities/ScrollServices'
import Animations from '../../utilities/animations'


function Resume(props) {
  const [selectedBulletindex, setSelectedBulletIndex] = useState(0)
  const [carousalOffSetStyle, setCarousalOfSetStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animation.fadeInScreen(props.id);
  }
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  return (
    <div className='resume-conatiner screen-container'>
      <div className='resume-content'>
        
      </div>
      
    </div>
  )
}

export default Resume

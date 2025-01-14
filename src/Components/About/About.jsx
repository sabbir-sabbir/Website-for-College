import React from 'react'
import './About.css'

const About = ({setPlayState}) => {
  return (
    <>
    <div className="class-for-about-section container" id='about'>
        <div className="about-left">
        <img src="about.png" alt="about-picture" className="about-img" />
        <img src="play-icon.png" alt="about-picture" className="play-icon" onClick={()=> {setPlayState(true)}} />
        </div>
        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Preparing Tomorrows Leaders Today </h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, delectus? Nesciunt voluptate nisi, placeat suscipit officia iure nam sequi et?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur facere inventore quibusdam. Exercitationem facere voluptatibus est, vel non saepe.</p>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, delectus? Nesciunt voluptate nisi, placeat suscipit officia iure nam sequi et?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur facere inventore quibusdam. Exercitationem facere voluptatibus est, vel non saepe.</p>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, delectus? Nesciunt voluptate nisi, placeat suscipit officia iure nam sequi et?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur facere inventore quibusdam. Exercitationem facere voluptatibus est, vel non saepe.</p>
        </div>
    </div>
    </>
  )
}

export default About
import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <div className="class-for-hero-section container" id='hero'>
     <div className="class-for-hero-content">
      <h1>We Ensure Better Education For Better World</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quaerat, beatae modi, odit distinctio earum deserunt assumenda praesentium soluta deleniti voluptatem! Voluptas voluptatem illum fugit?</p>
      <button className="btn explore-btn">Explore More <img src="/dark-arrow.png" alt="Explore-More-arrow" /> </button>
     </div>
    </div>
    </>
  )
}

export default Hero
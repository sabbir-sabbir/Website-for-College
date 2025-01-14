import React from 'react'
import './Campus.css'

const Campus = () => {
  return (
  <>
  <div className="class-for-campus-section" id='campus'>
    <div className="gallery">
        <img src="gallery-1.png" alt="campus-photos" />
        <img src="gallery-2.png" alt="campus-photos" />
        <img src="gallery-3.png" alt="campus-photos" />
        <img src="gallery-4.png" alt="campus-photos" />
    </div>
    <button className="btn dark-btn">See more here <img src="white-arrow.png" alt="See more here" /> </button>

  </div>
  </>
  )
}

export default Campus
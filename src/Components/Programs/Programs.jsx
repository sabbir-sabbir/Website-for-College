import React from 'react'
import './Programs.css'

const Programs = () => {
  return (
   <>
   <div className="class-for-programs-section container" id='Program'>
    <div className="programs-con">
     <img src="program-1.png" alt="program-1" />
     <div className="caption">
     <img src="program-icon-1.png" alt="icon" />
     <p>Gratuation Degree</p>
     </div>
    </div>

    <div className="programs-con">
     <img src="program-2.png" alt="program-2" />
     <div className="caption">
     <img src="program-icon-2.png" alt="icon" />
     <p>Masters Degree</p>
     </div>
    </div>

    <div className="programs-con">
     <img src="program-3.png" alt="program-3" />
     <div className="caption">
     <img src="program-icon-3.png" alt="icon" />
     <p>Post Gratuation</p>
     </div>
    </div>
   </div>
   </>
  )
}

export default Programs
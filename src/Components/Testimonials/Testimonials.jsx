import React, {useRef} from 'react'
import './Testimonials.css'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
  
    const slideForward = ()=> {
         if(tx > -50){
            tx -= 25
         }
         slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = ()=> {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


  return (
     <>
     <div className="class-for-textimonials-section container" id='testimonials'>
      <img onClick={slideForward} className="next-btn" src="next-icon.png" alt="next-button" />
      <img onClick={slideBackward} className="back-btn" src="back-icon.png" alt="back-button" />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                 <div className="user-info">
                   <img src="user-1.png" alt="user-photo" />
                   <div>
                    <h1>William Jackson</h1>
                    <span>Edusity, USA</span>
                   </div>
                 </div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi expedita odio ab, cum, dolorem asperiores saepe autem ipsum quaerat consectetur ea recusandae possimus maxime voluptatum aperiam eum quia quidem?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                 <div className="user-info">
                   <img src="user-2.png" alt="user-photo" />
                   <div>
                    <h1>Amy Jean</h1>
                    <span>Edusity, USA</span>
                   </div>
                 </div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi expedita odio ab, cum, dolorem asperiores saepe autem ipsum quaerat consectetur ea recusandae possimus maxime voluptatum aperiam eum quia quidem?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                 <div className="user-info">
                   <img src="user-3.png" alt="user-photo" />
                   <div>
                    <h1>Emma Tessy</h1>
                    <span>Edusity, USA</span>
                   </div>
                 </div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi expedita odio ab, cum, dolorem asperiores saepe autem ipsum quaerat consectetur ea recusandae possimus maxime voluptatum aperiam eum quia quidem?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                 <div className="user-info">
                   <img src="user-4.png" alt="user-photo" />
                   <div>
                    <h1>Stanly Jordan</h1>
                    <span>Edusity, USA</span>
                   </div>
                 </div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi expedita odio ab, cum, dolorem asperiores saepe autem ipsum quaerat consectetur ea recusandae possimus maxime voluptatum aperiam eum quia quidem?</p>
                </div>
            </li>
        </ul>
      </div>
     </div>
     </>
  )
}

export default Testimonials
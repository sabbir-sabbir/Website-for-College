import React, {useState} from 'react'
import './Contact.css'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ea427df2-51ed-440e-ba2c-afda9b3c15db");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <>
    <div className="container class-for-contact-section" id='contact'>
      <div className="contact-col">
       <h3>Send Us a Message <img src="msg-icon.png" alt="contact-section" /> </h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus numquam facilis quaerat necessitatibus. Quisquam magnam dolorem perferendis sLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus numquam facilis quaerat necessitatibus. Quisquam magnam dolorem perferenduscipit labore rerum ipsa dicta maxime commodi placeat, accusantium impedit cum quo tenetur nihil natus debitis ex itaque inventore consectetur. Atque neque dolores hic esse vel odio autem ullam dolorum fugiat! Est!</p>
       <ul>
        <li> <img src="mail-icon.png" alt="Email" /> Iosabbir7890@gmail.com</li>
        <li> <img src="phone-icon.png" alt="Phone" /> +09 099 876 666</li>
        <li> <img src="location-icon.png" alt="Location" /> Queens, New-York, USA</li>
       </ul>
      </div>
      <div className="contact-col">
       <form onSubmit={onSubmit}>
        <label >Your Name</label>
        <input type="text" name="name" placeholder="Enter your name..." required />
        <label >Phone Number</label>
        <input type="tel" name="phone" placeholder="Enter your mobile number..." required/>
        <label >Input your message here !</label>
        <textarea name="message" rows="6" placeholder="Input your message here..." required></textarea>
        <button className="btn dark-btn" type="submit" >Submit now <img src="white-arrow.png" alt="submit now" /> </button>

       </form>
       <span>{result}</span>
      </div>
    </div>
    </>
  )
}

export default Contact
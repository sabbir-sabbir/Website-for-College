import {useState} from 'react'
import './App.css'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Testimonials from './Components/Testimonials/Testimonials'
import Title from './Components/Title/Title'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

function App() {
  const [playState, setPlayState] = useState(false)
  return (
    <>
     <Navbar/> 
     <Hero/>
     <Title subTitle='OUR PROGRAMS' Title='What We Offer' />
     <Programs/>
     <About setPlayState={setPlayState} />
     <Title subTitle='GALARY' Title='Campus Photos' />
     <Campus/>
     <Title subTitle='TESTIMONIALS' Title='What student Says !' />
     <Testimonials/>
     <Title subTitle='Contact us' Title='Get In Tuch.' />
     <Contact/>
     <Footer/>
     <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  )
}

export default App

import React, {useRef} from 'react'
import './VideoPlayer.css'

const VideoPlayer = ({playState , setPlayState }) => {
const player = useRef(null)
 const ClosePlayer = (e)=> {
    if(e.target === player.current){
        setPlayState(false)
    }
 }
  return (
    <>
    <div className={`video-player ${playState? ' ' : 'hide'} `}  ref={player} onClick={ClosePlayer}>
      <video src="students.mp4"  autoplay muted controls ></video>
    </div>
    </>
  )
}

export default VideoPlayer
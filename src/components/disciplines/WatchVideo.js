import React from 'react'
import { WatchVideoStyles } from '../styles/WatchVideoStyles'
import {Button} from '../Button'
import {AiOutlineCloseCircle} from 'react-icons/ai'


const WatchVideo = ({video,close}) => {
  const escape = ()=>{
    close(false)
  }
  
  return (
    <WatchVideoStyles>
      <div className="close">
        <Button onClick={escape}><AiOutlineCloseCircle fontWeight={800}/> Close</Button>
      </div>
      <div className="video">
        <iframe  src={`https://www.youtube.com/embed/${video.id}`}></iframe>
        <p>{video.snippet.title}</p>
      </div>
    </WatchVideoStyles>
  )
}

export default WatchVideo
import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner'
import Errors from '../Errors'
import { CeremonyStyles } from '../styles/CeremonyStyles'

const Opening = ({api}) => {
  const search = 'Tokyo2020 Opening Ceremony Highlights'
  const[video,setVideo] = useState('')
  const [errors,setError] = useState('')
  useEffect(()=>{
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${api}`)
    .then(response => {
      if(!response.ok){
        throw Error('Could not fetch data please check your network connection')
      }else{
        return response.json()
        
      }
      })
    .then(data =>{
      setVideo(data)
      setError('')
    })
    .catch(e =>{
      setError(e.message)
    })
  },[])
  
  return (
    <CeremonyStyles>
      {!video && !errors && <Spinner/>}
      {errors && <Errors err={errors}/>}
      {video && <div className='video'>
        <iframe  className='frame'  src={`https://www.youtube.com/embed/${video.items[0].id.videoId}`} title="YouTube video player" frameborder="0" ></iframe>
        <p className='videoTitle'>{video.items[0].snippet.title}</p>
      </div>}
    </CeremonyStyles>
  )
}

export default Opening
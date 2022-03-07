import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner'
import Errors from '../Errors'
import { DisciplineStyles } from '../styles/DisciplineStyles'
import WatchVideo from './WatchVideo'

const IdList = ['ms80nCeFYds','K6_cDzPBX7U','jQsSnuTu0zI','p4N1jaCAB3U','rAe8BlbjXj0','2mVEwYBDV3k','cNasgva7k3A','9aKxSjrKaqg','swUmA1w9ND4','6b-Z1dg52ng','IRHxI5EJ0u4','Dn8-M2zW9PU','j8BWUpctZX4','aeIJVuaQ33E']

const Combat = ({api}) => {
  const [errors,setError] = useState('')
  const[videos,setVideos] = useState('')
  const[watch,setWatch] = useState(false)
  
  useEffect(()=>{
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${IdList[0]},${IdList[1]},${IdList[2]},${IdList[3]},${IdList[4]},${IdList[5]},${IdList[6]},${IdList[7]},${IdList[8]},${IdList[9]},${IdList[10]},${IdList[11]},${IdList[12]},${IdList[13]}}&key=${api}`)
    .then(response => {
      if(!response.ok){
        throw Error('Could not fetch data please check your network connection')
      }else{
        return response.json()
        
      }
      })
    .then(data =>{
      setVideos(data.items)
      setError('')
    })
    .catch(e =>{
      setError(e.message)
    })
  },[])

  return (
    <DisciplineStyles>
      {!videos && !errors && <Spinner/>}
      {errors && <Errors err={errors}/>}
      {!watch && videos && <div className="grid">
        {videos.map((video,index)=>(
          <div className='video' key={index} onClick={()=>setWatch(video)}>
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
            <div className="info">
              <span>{video.snippet.title}</span>
              
            </div>
          </div>
        ))}
        </div> }
      {watch && videos && <WatchVideo video = {watch} close = {setWatch}/>}
    </DisciplineStyles>
  )
}

export default Combat
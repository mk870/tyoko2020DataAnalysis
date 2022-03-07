import React, { useEffect, useState } from 'react'
import Errors from '../Errors'
import Spinner from '../Spinner'
import { DisciplineStyles } from '../styles/DisciplineStyles'
import WatchVideo from './WatchVideo'


const IdList = ['zMFb8Y2QLPc','7pgoMCc08yA','nl7Hy-76cs8','1rJwcGIYBlA','3q1LFtwqopo','55v4Jv6BBA0','P0qtKWqWsK4','3zO1WoQKHlA','U_Uzj2Zg1_w','DWFj0QDoTEY','pZ2G6BoWy04','6vlDKzrf_C4','HYSUxgswIkk','aFOFRuqG7iU','9hrJYSJokPA','OGOvkoiEs8U','-BTOqOqSR-k','gP0g1mzG5mY','QCntSFAk0GY','JX3ij39OAso']

const Athletics = ({api}) => {
  const [errors,setError] = useState('')
  const[videos,setVideos] = useState('')
  const[watch,setWatch] = useState(false)
  
  useEffect(()=>{
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${IdList[0]},${IdList[1]},${IdList[2]},${IdList[3]},${IdList[4]},${IdList[5]},${IdList[6]},${IdList[7]},${IdList[8]},${IdList[9]},${IdList[10]},${IdList[11]},${IdList[12]},${IdList[13]},${IdList[14]},${IdList[15]},${IdList[16]},${IdList[17]},${IdList[18]},${IdList[19]}&key=${api}`)
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

export default Athletics

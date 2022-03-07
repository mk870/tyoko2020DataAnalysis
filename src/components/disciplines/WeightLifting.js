import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner'
import { DisciplineStyles } from '../styles/DisciplineStyles'
import WatchVideo from './WatchVideo'
import Errors from '../Errors'

const IdList= ['7F54wcJUrW0','ssEzTsg0reE','2ruvu8kZyOk','AQE7u2fYuxg','k38UWwGqIOE']

const WeightLifting = ({api}) => {
  const [errors,setError] = useState('')
  const[videos,setVideos] = useState('')
  const[watch,setWatch] = useState(false)
  
  useEffect(()=>{
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${IdList[0]},${IdList[1]},${IdList[2]},${IdList[3]},${IdList[4]}&key=${api}`)
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

export default WeightLifting
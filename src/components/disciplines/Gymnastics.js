import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner'
import { DisciplineStyles } from '../styles/DisciplineStyles'
import WatchVideo from './WatchVideo'
import Errors from '../Errors'

const IdList =['H69d1aJ-8GE','jaQDixc5mM8','KK7PLZrjfQQ','eNwMcNByJNc','8idnUVMChLA','D3qCmMYkTAA','I84it6P5_i8','XPFkGJwv_zI','htVvvFRN9jk','tiZHy9zDKak','PpXNQV33hcg','_8fgpiBtcPA']

const Gymnastics = ({api}) => {
  const [errors,setError] = useState('')
  const[videos,setVideos] = useState('')
  const[watch,setWatch] = useState(false)
  
  useEffect(()=>{
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${IdList[0]},${IdList[1]},${IdList[2]},${IdList[3]},${IdList[4]},${IdList[5]},${IdList[6]},${IdList[7]},${IdList[8]},${IdList[9]},${IdList[10]},${IdList[11]}&key=${api}`)
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
export default Gymnastics
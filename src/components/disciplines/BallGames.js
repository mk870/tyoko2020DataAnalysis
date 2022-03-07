import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner'
import Errors from '../Errors'
import { DisciplineStyles } from '../styles/DisciplineStyles'
import WatchVideo from './WatchVideo'

const IdList =['pQRfB1v-9vo','0mqbcWmqKBc','JIEso8-Tbfo','u4loOR3JVYQ','6xD3l66dm2c','atRMNP2xFJg','gD07sOeBD1g','3mZ2-aEDAzc','yMrBwAoT1g4','KuPmXAGuopI','GYD3aVQ2G_Y','ddSLi0pQ6vA','hY_hf-tpULA','N-QW3yV-GWk','gGM9F18kk2M','RFOscAFBoHI','K9iBHgzXpgY','9bd-De6lJHY','vsFMfrxq2eM','WKELX_xqgZY','nNWcH6IM2c4','U90lxRc3reE','jSk9UbQqtdU','a7cl05NbtCU']

const BallGames = ({api}) => {
  const[videos,setVideos] = useState('')
  const[watch,setWatch] = useState(false)
  const [errors,setError] = useState('')
  useEffect(()=>{
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${IdList[0]},${IdList[1]},${IdList[2]},${IdList[3]},${IdList[4]},${IdList[5]},${IdList[6]},${IdList[7]},${IdList[8]},${IdList[9]},${IdList[10]},${IdList[11]},${IdList[12]},${IdList[13]},${IdList[14]},${IdList[15]},${IdList[16]},${IdList[17]},${IdList[18]},${IdList[19]},${IdList[20]},${IdList[21]},${IdList[22]},${IdList[23]}&key=${api}`)
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

export default BallGames
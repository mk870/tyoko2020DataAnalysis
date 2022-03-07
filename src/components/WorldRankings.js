import React, { useEffect, useRef } from 'react'
import { VizStyles } from './styles/VizStyles'

const{tableau} = window

const WorldRankings = () => {
  const viz1 = useRef(null)
  useEffect(()=>{
    athletesviz()
  },[])

  const url = 'https://public.tableau.com/views/Worldrankings/Dashboard1'
  
  const options = {
    device:'desktop'
  }
  const athletesviz = () =>{
    new tableau.Viz(viz1.current,url,options)
  }
  return (
    <VizStyles>
    <div className="info">
      <h3>World Olympic Rankings</h3>
      <p>
        In world rankings, USA is number one followed by China, then Japan.
      </p>
    </div>
    <div ref={viz1} className='viz'></div>
  </VizStyles>
  )
}

export default WorldRankings
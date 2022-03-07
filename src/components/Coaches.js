import React, { useEffect, useRef } from 'react'
import { VizStyles } from './styles/VizStyles'

const{tableau} = window
  

const Coaches = () => {
  const viz1 = useRef(null)
   
  useEffect(()=>{
    athletesviz()
  },[])
  const url = 'https://public.tableau.com/views/Coaches_16458748330610/Dashboard1'
  const options = {
    device:'desktop'
  }
  const athletesviz = () =>{
    new tableau.Viz(viz1.current,url,options)
  }
  return (
    <VizStyles>
    <div className="info">
      <h3>Coaches Analysis</h3>
      <p>
        In total there were 394 coaches that participated in the games from all over the globe.Japan had the most coaches(35) in total followed by the US and Australia both at 28 each. Basketball was the discipline with the most coaches followed by artistic swimming whilst water polo had the fewest with only 22 coaches
      </p>
    </div>
    <div ref={viz1} className='viz'></div>
  </VizStyles>
  )
}

export default Coaches
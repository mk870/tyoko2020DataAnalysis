import React, { useEffect, useRef } from 'react'
import { VizStyles } from './styles/VizStyles'

const{tableau} = window

const Athletesviz = () => {
  const viz1 = useRef(null)
  const viz2 = useRef(null)

  useEffect(()=>{
    athletesviz()
  },[])

  const url = 'https://public.tableau.com/views/Athletes_16458732983950/Dashboard1'
  const url2 = 'https://public.tableau.com/views/Gender_16458789632450/Dashboard1'

  const options = {
    device:'desktop'
  }

  const athletesviz = () =>{
    new tableau.Viz(viz1.current,url,options)
    new tableau.Viz(viz2.current,url2,options)
  }
  
  return (
    <VizStyles>
      <div className="info">
        <h3>Athletes Analysis</h3>
        <p>
          In total 11 316 athletes competed in the olympic games, with 5884 men and 5432 women.
          This accounts for 52%men and 48% women an improvement in diversity compared to the past.
          USA had the most athletes(615 in total) followed by Japan with 586. 
          Athletics had the most athletes with 969 women and 1072 men giving a total of 2041 athletes.This was not a surprise given the popularity of the discipline.Swimming was second with a total of 779 athletes comprising of 418 males and 361 females. Cycling Bmx Freestyle had the least athletes of a total of 19 comprising of 10 men and 9 women.
        </p>
      </div>
      <div ref={viz1} className='viz'></div>
      <br />
      <h4>Athletes Gender Analysis</h4>
      <div ref={viz2} className='viz'></div>
    </VizStyles>
  )
}

export default Athletesviz
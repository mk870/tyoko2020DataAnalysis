import React, { useEffect, useRef } from 'react'
import { VizStyles } from './styles/VizStyles'

const{tableau} = window

const Medals = () => {
  const viz1 = useRef(null)
  const viz2 = useRef(null)
  const viz3 = useRef(null)

  useEffect(()=>{
    athletesviz()
  },[])
  const url1 = 'https://public.tableau.com/views/Goldmedalspercountry/Dashboard1'
  const url2 = 'https://public.tableau.com/views/Silvermedals/Dashboard1'
  const url3 = 'https://public.tableau.com/views/BronzeMedals/Dashboard1'

  const options = {
    device:'desktop'
  }
  const athletesviz = () =>{
    new tableau.Viz(viz1.current,url1,options)
    new tableau.Viz(viz2.current,url2,options)
    new tableau.Viz(viz3.current,url3,options)
  }
  return (
    <VizStyles>
    <div className="info">
      <h3>Medals Analysis</h3>
      <p>
        The US dominated the podium, leading all other countries in all medals.In gold medals the US had 39 followed by China with 38 and then Japan with 27.In silver medals, the US led with 44 followed by China with 32 and ROC(Russia) with 28. The US had 35 bronze medals followed by ROC(Russia) with 23 and UK and Australia with 22 each.
      </p>
    </div>
    <h4>Gold Medals per Country</h4>
    <div ref={viz1} className='viz'></div>
    <h4>Silver Medals per country</h4>
    <div ref={viz2} className='viz'></div>
    <h4>Bronze Medals per Country</h4>
    <div ref={viz3} className='viz'></div>
  </VizStyles>
  )
}

export default Medals
import React from 'react'
import { InfoStyles } from './styles/InfoStyles'
import image from '../images/main3.jpg'

const Info = () => {
  return (
    <InfoStyles>
      <div className="head">
        <img src={image} alt="main" />
        <h1>OlympixAnalytix</h1>
        <span>The best online platform for the recap of tyoko summer 2021 Olympics</span>
      </div>
      <div className="wrapper">
        
        <div className="analysis">
          <span>Comprehensive Olympics Data analysis on:</span>
          <div className="list">
            <ul>
              <li>Athletes</li>
              <li>Coaches</li>
              <li>Medals won</li>
              <li>International Rankings</li>
            </ul>
          </div>
        </div>
        <div className="hightlights">
          <span>Watch highlights from all the incredible moments on:</span>
          <div className="list">
            <ul>
              <li>Athletics</li>
              <li>Swimming</li>
              <li>Soccer</li>
              <li>Gyymnastics</li>
              <li>And much more.....</li>
            </ul>
          </div>
        </div>
      </div>
      
    </InfoStyles>
  )
}

export default Info
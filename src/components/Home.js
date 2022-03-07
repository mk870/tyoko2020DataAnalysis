import React from 'react'
import Card from './Card'
import Info from './Info'
import Slider from './Slider'
import { HomeStyles } from './styles/HomeStyles'

const Home = () => {
  return (
    <HomeStyles>
      <div className="container">
        <Info/>
        <Card/>
      </div>
      <Slider/>
    </HomeStyles>
  )
}

export default Home
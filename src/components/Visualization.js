import React from 'react'
import { Button } from './Button'
import { VisualizationStyles } from './styles/VisualizationStyles'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { useState } from 'react'
import Athletesviz from './Athletesviz'
import Coaches from './Coaches'
import Medals from './Medals'
import WorldRankings from './WorldRankings'

const Visualization = () => {
  const [page,setPage] = useState(1)
  const next = () => setPage(page + 1)
  const prev = () => setPage(page - 1)
  return (
    <VisualizationStyles>
      <h1>Tyoko 2020 Data Visualization</h1>
      {page === 1 && <Athletesviz/>}
      {page === 2 && <Coaches/>}
      {page === 3 && <Medals/>}
      {page === 4 && <WorldRankings/>}
      <div className="btns">
        {page > 1 && <Button onClick={prev}><AiOutlineArrowLeft fontSize={19}/> Prev</Button>}
        {page < 4 && <Button onClick={next}>Next <AiOutlineArrowRight fontSize={19}/></Button>}
      </div>
      {page}
    </VisualizationStyles>

  )
}

export default Visualization
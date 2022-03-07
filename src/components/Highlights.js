import React, { useContext} from 'react'
import { HighlightsStyles } from './styles/HighlightsStyles'
import Opening from '../components/disciplines/Opening'
import Athletics from './disciplines/Athletics'
import Swimming from './disciplines/Swimming'
import Gymnastics from './disciplines/Gymnastics'
import WeightLifting from './disciplines/WeightLifting'
import Closing from './disciplines/Closing'
import Combat from './disciplines/Combat'
import BallGames from './disciplines/BallGames'
import { AppContext } from './AppContext/Appcontext'


const Highlights = () => {
  const {setDiscipline} = useContext(AppContext)
  const {discipline} = useContext(AppContext)
  const KEY ='AIzaSyA4sK8zH2mhKv0-xHNTXXngIm79BV3eIAY'
  
  return (
    <HighlightsStyles>
      <label htmlFor="discipline">Choose Highlights:</label>
      <select name="discipline" value={discipline} onChange={(e)=>setDiscipline(e.target.value)}>
        <option value="Opening-ceremony">Opening-ceremony</option>
        <option value="Athletics">Athletics</option>
        <option value="Swimming">Swimming</option>
        <option value="Combat">Combat</option>
        <option value="BallGames">BallGames</option>
        <option value="Gymnastics">Gymnastics</option>
        <option value="Weight-lifting">Weight-lifting</option>
        <option value="Closing-ceremony">Closing-ceremony</option>
      </select>
      {discipline === 'Opening-ceremony' && <Opening api={KEY}/>}
      {discipline === 'Athletics' && <Athletics api={KEY}/>}
      {discipline === 'Swimming' && <Swimming api ={KEY}/>}
      {discipline === 'Combat' && <Combat api ={KEY}/>}
      {discipline === 'BallGames' && <BallGames api ={KEY}/>}
      {discipline === 'Gymnastics' && <Gymnastics api ={KEY}/>}
      {discipline === 'Weight-lifting' && <WeightLifting api ={KEY}/>}
      {discipline === 'Closing-ceremony' && <Closing api ={KEY}/>}
    </HighlightsStyles>
  )
}

export default Highlights
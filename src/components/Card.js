import React, { useContext } from 'react'
import { CardStyles } from './styles/CardStyles'
import logo from '../images/main4.jpg'
import boxing from '../images/boxing.webp'
import athletics from '../images/athletics.jpg'
import gym from '../images/gym.jpg'
import soccer from '../images/soccer.jpg'
import swim from '../images/swim.jpg'
import weights from '../images/weights.webp'
import image1 from '../images/main.jpeg'
import image2 from '../images/slide3.jpg'
import { AppContext } from './AppContext/Appcontext'
import { useNavigate } from 'react-router'

const events = [
  {name:'Combat',image:boxing},
  {name:'Athletics',image:athletics},
  {name:'Gymnastics',image:gym},
  {name:'BallGames',image:soccer},
  {name:'Swimming',image:swim},
  {name:'Weight-lifting',image:weights}
 ]
const Card = () => {
  const{setDiscipline} = useContext(AppContext)
  const navigate = useNavigate()
  const opening = ()=>{
    setDiscipline('Opening-ceremony')
    navigate('/highlights')
  }
  const closing = ()=>{
    setDiscipline('Closing-ceremony')
    navigate('/highlights')
  }
  const route = (name)=>{
    setDiscipline(name)
    navigate('/highlights')
  }
  return (
    <CardStyles>
      <div className="top">
        <img src={logo} alt="mini logo" />
        <h3>2020 Tyoko olympics</h3>
      </div>
      <div className="middle">
        <div className="ceremony" onClick={opening}>
          <img src={image2} alt="opening" />
          <span>Opening ceremony</span>
        </div>
        <div className="ceremony" onClick={closing}>
          <img src={image1} alt="closing" />
          <span>Closing ceremony</span>
        </div>
        
      </div>
      <div className="bottom">
        {events.map((event)=>(
          <div className='image' key={event.name} onClick={()=>route(event.name)}>
            <img src={event.image} alt="event" />
            <span>{event.name}</span>
          </div>
        ))}
      </div>
    </CardStyles>
  )
}

export default Card
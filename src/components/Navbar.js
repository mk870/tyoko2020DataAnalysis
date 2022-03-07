import React from 'react'
import { NavbarStyles } from './styles/NavbarStyles'
import logo from '../images/logo2.jpg'
import { useNavigate } from 'react-router'
import {FaHome} from 'react-icons/fa'
import {VscGraph} from 'react-icons/vsc'
import {MdOutlineHighlight} from 'react-icons/md'
import {FcSportsMode} from 'react-icons/fc'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <NavbarStyles>
      <div className="logo">
        <img src={logo} alt="logo" />
        <span><FcSportsMode fontSize={29}/>Olympix</span>
      </div>
      <div className="links">
        <span onClick={()=>navigate('/')}><FaHome fontSize={19}/>Home</span>
        <span onClick={()=>navigate('/visualizations')}><VscGraph fontSize={19}/>Visualizations</span>
        <span onClick={()=>navigate('/highlights')}><MdOutlineHighlight fontSize={19}/>Highlights</span>
      </div>
    </NavbarStyles>
  )
}

export default Navbar
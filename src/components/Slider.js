import React, { useEffect, useState } from 'react'
import { SliderStyles} from './styles/SliderStyles'
import image1  from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3  from '../images/image3.jpg'
import image4  from '../images/image4.jpg'
import image5  from '../images/image5.jpg'
import image6  from '../images/image6t.jpg'
import image7  from '../images/image7.jpg'
import image8  from '../images/image8.jpg'
import image9  from '../images/image9.jpg'
import image10  from '../images/image10.jpg'
import image11 from '../images/image11.jpg'
import image12 from '../images/image12.jpeg'
import image13 from '../images/image13.jpg'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const imagelist = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13]

const Slider = () => {
  const [currentSlide,setCurrentSlide] = useState(0)
  let slideInterval
  let imageTotal = imagelist.length - 1

  useEffect(()=>{
    setCurrentSlide(0)
  },[])

  const nextSlide = ()=>{
    if (currentSlide === imageTotal) {
      setCurrentSlide(0)
    }else{
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = ()=>{
    if(currentSlide === 0){
      setCurrentSlide(imageTotal)
    }else{
      setCurrentSlide(currentSlide - 1)
    }
  }

  const auto = ()=>{
    slideInterval = setInterval(nextSlide, 4000);
  }

  useEffect(()=>{
    auto()
    return ()=> clearInterval(slideInterval)
  },[currentSlide])

  return (
    <SliderStyles>
      <div className="preview"><h4>Inspiring Moments</h4></div>
      <div className="slidercontent">
        <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide}/>
        
        {imagelist.map((image,index)=>(
          <div className={currentSlide === index ? 'current' : 'slide'}>
            {currentSlide === index && 
              <img src={image} alt="image"/>
            }
          </div>
        ))}
        <AiOutlineArrowRight className='arrow next' onClick={nextSlide}/>
      </div>
      
    </SliderStyles>
  )
}

export default Slider
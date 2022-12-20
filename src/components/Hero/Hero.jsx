import {React, useState} from 'react'
import SimpleSlider from '../UI/SimpleSlider';
import Hero_Img from '../../assets/hero.jpg';
import Hero2 from '../../assets/hero2.jpg';
import Hero3 from '../../assets/hero3.jpg';


const Hero = () => {
  return (
    <div id='hero' className='md:transition duration-500 ease-in-out  max-h-[820px]'>
        <SimpleSlider />
    </div>
  )
}

export default Hero
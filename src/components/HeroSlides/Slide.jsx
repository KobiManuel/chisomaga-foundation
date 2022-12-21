import React from 'react'
import Hero_Img from '../../assets/hero.jpg'

const Slide = (props) => {
  return (
    <div className='max-h-[820px]' style={{
        backgroundImage: 'url('+Hero_Img+')',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        color: "#f5f5f5"
      }}>
        </div>
  )
}

export default Slide
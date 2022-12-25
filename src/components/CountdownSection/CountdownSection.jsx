import React from 'react'
import countdown_bg from '../../assets/hero6.jpg'
const CountdownSection = () => {
  return (
    <div className=' mb-10' style={{
        backgroundImage: 'url('+countdown_bg+')',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        width: "100%",
        maxWidth: "100%",
        height: "215px"
    }}>

    </div>
  )
}

export default CountdownSection
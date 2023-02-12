import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Wrapper = (props) => {
  useEffect(() => {
   Aos.init({ duration: 3000 })
  }, [])
  
  return (
    <div id={props.id} className={`py-[96px] ${props.bg_color}`} style={props.style} data-aos={props.data}>{props.children}</div>
  )
}

export default Wrapper
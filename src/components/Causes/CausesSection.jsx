import React from 'react'
import Wrapper from '../UI/Wrapper'

const CausesSection = () => {
  return (
    <Wrapper bg_color=' !bg-[#f1f6f9]'>
       <header id='about' className='body-font font-TomatoFont w-[570px] max-[580px]:w-[80%] h-[270px] mx-auto text-center'>
        <h5 className='text-[var(--primary)] text-lg leading-10'>Our Causes You Can See</h5>
        <h2 className=' capitalize text-[var(--blue)] max-[580px]:text-[30px] text-5xl leading-[1.4]'>Explore the latest causes we've worked on</h2>
       </header>
       
    </Wrapper>
  )
}

export default CausesSection
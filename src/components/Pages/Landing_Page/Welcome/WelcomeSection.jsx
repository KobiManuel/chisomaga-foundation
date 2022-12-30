import React from 'react'
import Wrapper from '../../../UI/Wrapper'
import welcome_bg from '../../../../assets/Welcome.jpg'
import welcome_img from '../../../../assets/welcome_img.jpg'
import Button from '../Button/Button'

const WelcomeSection = () => {
  return (
    <Wrapper bg_color="relative" style={{
      backgroundImage: 'url('+welcome_bg+')',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
      <section className=' flex md:flex-wrap flex-col md:gap-6 gap-4 justify-center items-center md:flex-row px-4 body-font font-TomatoFont max-w[1100px] mx-auto'>
        <div className=' w-[540px] max-[1040px]:w-[80%]  sm:h-[380px]'>
         <header >
          <h3 className='relative pb-[24px] text-4xl text-white font-medium w-[80%] text-left before:absolute before:content-[" "] before:bottom-0 before:left-0 before:w-[64px] before:h-[4px] before:rounded-[2px] before:bg-[var(--primary)] '>Welcome to our Charity</h3>
         </header>
         <div className=' mt-12'>
          <p className=' text-white font-[100]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu libero consequat tempus. Quisque molestie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.</p>
         </div>
         <div className=" mt-12">
         <Button className=" text-white">
          Read More
         </Button>
         </div>
         </div>
         <div className=' w-[540px] max-[1040px]:w-[80%]  sm:h-[500px] max-[639px]:w-[80%] max-[639px]:h-[350px]  flex justify-center items-center'>
          <img src={welcome_img} alt="/"  style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}/>
         </div>
      </section>
    </Wrapper>
  )
}

export default WelcomeSection
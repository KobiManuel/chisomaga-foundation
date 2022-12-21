import React from 'react'
import Slider from 'react-slick';
import Hero_Img from '../../assets/hero.jpg';
import Hero2 from '../../assets/hero2.jpg';
import Hero3 from '../../assets/hero3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
      };
  return (
    <Slider {...settings} className=" overflow-hidden h-[547.3px]">
        <img src={Hero_Img} alt='/' className=' w-full' />
        <img src={Hero2} alt='/' className=' w-full' />
        <img src={Hero3} alt='/' className=' w-full' />
    </Slider>
  )
}

export default SimpleSlider
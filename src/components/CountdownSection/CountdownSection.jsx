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
    <div className=' flex flex-row max-[474px]:flex-wrap  justify-center items-center translate-y-[12.5%] max-[474px]:translate-y-[0] max-[474px]:px-0 max-[474px]:py-[20px] max-[474px]:gap-0  mx-auto body-font font-TomatoFont max-w-[1100px]'>
       <div className=' flex flex-col max-[474px]:items-center max-[474px]:w-[100%] w-[23%]  px-[15px] py-[44px] bg-transparent max-[474px]:h-fit max-[474px]:px-0 max-[474px]:py-0'>
       <p className=' font-semibold text-[40px] text-white max-[654px]:text-[30px] max-[474px]:text-[20px]'>6,200<span>+</span></p>
       <p className=' font-extralight text-[20px] text-white max-[654px]:text-[15px] max-[474px]:text-[10px] max-[474px]:text-gray-400'>Donations</p>
        </div> 
        <div className=' max-[474px]:w-[100%] w-[23%] px-[15px] py-[44px] bg-transparent flex flex-col items-center  max-[474px]:h-fit max-[474px]:px-0 max-[474px]:py-0'>
       <p className=' font-semibold text-[40px] text-white max-[654px]:text-[30px] max-[474px]:text-[20px]'>80<span>+</span></p>
       <p className=' font-extralight text-[20px] text-white max-[654px]:text-[15px] max-[474px]:text-[10px] max-[474px]:text-gray-400'>Raised</p>
        </div> 
        <div className=' max-[474px]:w-[100%] w-[23%] px-[15px] py-[44px] bg-transparent flex flex-col items-center  max-[474px]:h-fit max-[474px]:px-0 max-[474px]:py-0'>
       <p className=' font-semibold text-[40px] text-white max-[654px]:text-[30px] max-[474px]:text-[20px]'>256<span>+</span></p>
       <p className=' font-extralight text-[20px] text-white max-[654px]:text-[15px] max-[474px]:text-[10px] max-[474px]:text-gray-400'>Volunteers</p>
        </div> 
        <div className='max-[474px]:w-[100%] w-[23%] px-[15px] py-[44px] bg-transparent flex flex-col items-end max-[474px]:items-center max-[474px]:h-fit max-[474px]:px-0 max-[474px]:py-0'>
       <p className=' font-semibold text-[40px] text-white max-[654px]:text-[30px] max-[474px]:text-[20px]'>50<span>+</span></p>
       <p className=' font-extralight text-[20px] text-white max-[654px]:text-[15px] max-[474px]:text-[10px] max-[474px]:text-gray-400'>Sponsors</p>
        </div> 
    </div>
    </div>
  )
}

export default CountdownSection
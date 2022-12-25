import React from 'react'
import Wrapper from '../UI/Wrapper'
import {TbHeartHandshake} from 'react-icons/tb'
import {MdOutlineVolunteerActivism} from 'react-icons/md'
import {GiTakeMyMoney} from 'react-icons/gi'
import ActivityCard from '../Cards/ActivityCard'


const Activities = () => {
  return (
    <Wrapper bg_color=' !bg-[#f1f6f9]'>
       <header id='about' className='body-font font-TomatoFont w-[570px] max-[580px]:w-[80%] h-[270px] mx-auto text-center'>
        <h5 className='text-[var(--primary)] text-lg leading-10'>What we are doing</h5>
        <h2 className=' capitalize text-[var(--blue)] max-[580px]:text-[30px] text-5xl leading-[1.4]'>We are on a mission to help the helpless</h2>
       </header>
        <div className='body-font font-TomatoFont max-w-[1100px] mx-auto flex flex-col lg:flex-row max-[1040px]:flex-col justify-center items-center gap-7 md:px-6 cursor-pointer'>
        <ActivityCard>
        <figure className='mb-4 p-3 rounded-full bg-white'>
       <TbHeartHandshake  size={70} color="var(--primary)"/>
       </figure>
       <header>
        <h3 className=' text-white text-center text-[24px] font-semibold'>Become a Sponsor</h3>
       </header>
       <span className='max-[389px]:hidden'>
        <p className='text-white text-center font-extralight'>Become a Sponsor by donating and supporting our causes with your money and presence and ensure that we reach as many people as possible</p>
       </span>
        </ActivityCard>
        <div className=' shadow-2xl !bg-white p-[40px] w-[80%] justify-center  lg:h-[400px] lg:md:w-[351.38px] max-[1040px]:w-[80%] max-[1040px]:h-[300px] rounded-[24px]  flex flex-col items-center max-[999px]:py-[7%]'>
        <figure className='mb-4 p-3 rounded-full bg-[var(--blue)]'>
       <MdOutlineVolunteerActivism  size={70} color="white"/>
       </figure>
       <header>
        <h3 className='text-[var(--blue)] text-center text-[24px] font-semibold'>Become a Volunteer</h3>
       </header>
       <span className='max-[389px]:hidden'>
        <p className='text-[var(--blue)] text-center font-extralight'>Become a Volunteer by donating and supporting our causes with your money and presence and ensure that we reach as many people as possible</p>
       </span>
       </div>
        <ActivityCard>
        <figure className='mb-4 p-3 rounded-full bg-white'>
       <GiTakeMyMoney  size={70} color="var(--primary)"/>
       </figure>
       <header>
        <h3 className=' text-white text-center text-[24px] font-semibold'>Become a Team Rep</h3>
       </header>
       <span className='max-[389px]:hidden'>
        <p className='text-white text-center font-extralight'>Become a Team Rep by donating and supporting our causes with your money and presence and ensure that we reach as many people as possible</p>
       </span>
        </ActivityCard>
        </div>
    </Wrapper>
  )
}

export default Activities
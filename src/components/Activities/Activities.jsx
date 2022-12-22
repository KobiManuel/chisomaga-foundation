import React from 'react'
import Wrapper from '../UI/Wrapper'
import {TbHeartHandshake} from 'react-icons/tb'
import {MdOutlineVolunteerActivism} from 'react-icons/md'
import {GiTakeMyMoney} from 'react-icons/gi'
import ActivityCard from '../Cards/ActivityCard'


const Activities = () => {
  return (
    <Wrapper>
        <div className='body-font font-TomatoFont max-w-[1100px] mx-auto flex flex-col md:flex-row justify-center items-center gap-7 md:px-6'>
        <ActivityCard>
        <figure>
       <TbHeartHandshake  size={70} color="white"/>
       </figure>
       <header>
        <h3 className=' text-white text-center text-[24px] font-medium'>Become a Sponsor</h3>
       </header>
       <span>
        <p className='text-white text-center'>Become a Sponsor by donating and supporting our causes with your money and presence and ensure that we reach as many people as possible</p>
       </span>
        </ActivityCard>
        <ActivityCard>
        <figure>
       <TbHeartHandshake  size={70} color="white"/>
       </figure>
       <header>
        <h3 className=' text-white text-center text-[24px] font-medium'>Become a Sponsor</h3>
       </header>
       <span>
        <p className='text-white text-center'>Become a Sponsor by donating and supporting our causes with your money and presence and ensure that we reach as many people as possible</p>
       </span>
        </ActivityCard>
        <ActivityCard>
        <figure>
       <TbHeartHandshake  size={70} color="white"/>
       </figure>
       <header>
        <h3 className=' text-white text-center text-[24px] font-medium'>Become a Sponsor</h3>
       </header>
       <span>
        <p className='text-white text-center'>Become a Sponsor by donating and supporting our causes with your money and presence and ensure that we reach as many people as possible</p>
       </span>
        </ActivityCard>
        </div>
    </Wrapper>
  )
}

export default Activities
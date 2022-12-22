import React from 'react'
import Wrapper from '../UI/Wrapper'
import {CausesCard_data} from '../ComponentData/CausesCard_data'

const CausesCard = ({image, subtitle, progress, raisedAmount, goal}) => {
  return (
    <Wrapper bg_color=' !flex !flex-col !gap-3'>
        <figure className='body-font font-TomatoFont w-[300px]'>
            <img src={image} alt="/" />
        </figure>
        <header>
            <h5 className=' text-[var(--blue)] font-medium text-xl leading-[1.4]'>{subtitle}</h5>
        </header>
        <progress value='70' max="100">
            70%
        </progress>
        <div className='flex justify-between'>
            <p className=' text-[var(--blue)] text-sm'>{`Raised: ${raisedAmount}`}</p>
            <p className=' text-[var(--blue)] text-sm'>{`Goal: ${goal}`}</p>
        </div>
    </Wrapper>
  )
}

export default CausesCard
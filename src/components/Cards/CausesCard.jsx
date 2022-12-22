import React from 'react'
import Wrapper from '../UI/Wrapper'

const CausesCard = ({image, subtitle, progress, raisedAmount, goal}) => {
  return (
    <Wrapper>
        <img  src={image} alt="/"/>
    </Wrapper>
  )
}

export default CausesCard
import React from 'react'

const Wrapper = (props) => {
  return (
    <div className={`py-[10%] ${props.className}`}>{props.children}</div>
  )
}

export default Wrapper
import React from 'react'
import styles from './ActivityCard.module.css'

const ActivityCard = ({children, className}) => {
  return (
    <div className={`p-[40px] w-[80%] justify-center  md:h-[400px] md:w-[351.38px] rounded-[24px]  flex flex-col items-center ${styles.card} ${className}` }>
      {children}
    </div>
  )
}

export default ActivityCard
import React from 'react'
import styles from '../Button/Button.module.css'

const ActivityCard = ({children}) => {
  return (
    <div className={`p-[40px] w-[80%]  md:h-[320px] md:w-[351.38px] rounded-[24px] bg-[var(--primary)] flex flex-col items-center max-[999px]:py-[7%] ${styles.button}`}>
      {children}
    </div>
  )
}

export default ActivityCard
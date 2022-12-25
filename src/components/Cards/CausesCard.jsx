import React,{useState, useEffect} from 'react'



const CausesCard = ({image, subtitle, progress, raisedAmount, goal}) => {
  const [progressWidth, setProgressWidth] = useState()
       /* const progressBarHandler = () => {
            const progressBar = {
                width: `${progress}`,
                left:  `${progress}`
            }
            if (window.scrollY >= 2303.3) {
                setInterval(() => {
                    setProgressWidth(progressBar)
                }, 1000); 
                setInterval(() => {
                    setProgressWidth()
                }, 5000); 
            } 

             
          };
          window.addEventListener("scroll", progressBarHandler) */
 
useEffect(() => {
    setTimeout(() => {
        const progressBar = {
            width: `${progress}`,
            left: `${progress}`
        }
        setProgressWidth(progressBar)
        //console.log(progressWidth);
      }, 3000);
   }, [progress]);
  return (
    <div className='body-font font-TomatoFont flex flex-col gap-3 justify-center items-center w-[350px] h-[440.96px] max-[799px]:w-[100%] bg-white max-[382px]:h-[510px] max-[253px]:mt-12 mx-auto' >
        <figure className='w-[80%] h-[210.66px] max-[783px]:w-[80%] max-[783px]:h-[200px] max-[490px]:w-[80%]' >
            <img src={image} alt="/" className='w-[100%] h-[210.66px] max-[799px]:w-[100%] max-[799px]:object-cover max-[783px]:h-[200px]' />
        </figure>
        <header className=' w-[80%] h-[58.8px]'>
            <h5 className=' text-[var(--blue)] font-semibold text-[21px] leading-[1.4]'>{subtitle}</h5>
        </header>
        <div className=' mt-5 relative w-[80%] h-2.5 border-solid rounded-[4px] border-gray-100 bg-gray-100 max-[382px]:mt-[5rem]'>
            <div className=' absolute -top-[20px] left-0 text-green-500 overflow-hidden' style={progressWidth}>{progress}</div>
            <div className=' transition-width duration-[.4s] ease-in bg-green-500 rounded-[4px] w-[0] h-[100%]' style={progressWidth}></div>
        </div>
        <div className='flex flex-wrap justify-between w-[80%] h-[26.5px]'>
            <p className=' text-[var(--blue)] text-sm'>Raised:  <span className=' text-base font-semibold'>{raisedAmount}</span></p>
            <p className=' text-[var(--blue)] text-sm'>Goal:  <span className=' text-base font-semibold'>{goal}</span></p>
        </div>
    </div>
  )
}

export default CausesCard
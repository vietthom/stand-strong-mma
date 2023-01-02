import React from 'react'
import Image from 'next/image'


const Banner = ({imgUrl, title}) => {
  return (
    <div className='w-full h-[300px] relative flex items-center justify-center'>
        <Image className="opacity-50 z-[-1]" fill src={imgUrl} alt="/" style={{objectFit: 'cover'}}/>
        <h1 className="text-white text-center text-6xl">{title}</h1>
    </div>
  )
}

export default Banner
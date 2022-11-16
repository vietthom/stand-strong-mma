import React from 'react'
import Image from 'next/image'
import Winner from '../public/assets/winner.jpg'

const Banner = () => {
  return (
    <div className='w-full h-[300px] relative flex items-center justify-center'>
        <Image className="opacity-50 z-[-1]" fill src={Winner} alt="/" style={{objectFit: 'cover'}}/>
        <h1 className="text-white text-center text-6xl">About Us</h1>
    </div>
  )
}

export default Banner
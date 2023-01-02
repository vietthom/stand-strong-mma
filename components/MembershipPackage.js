import React from 'react'
import Image from 'next/image'
import Silat from '../public/assets/icons/silat-icon.png'
import MMA from '../public/assets/icons/MMA-icon.png'
import MuayThai from '../public/assets/icons/muaythai_icon.png'
const MembershipPackage = () => {
  return (
    <div className='w-full py-[10rem] px-4'>
        <div className='container mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
              <h1 className="font-bold text- text-center">Drop-In Classes</h1>
              <Image src={Silat} alt="/" />
              <p>Drop into any class for $20. Paid at the gym prior to class.</p>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
              <h1 className="font-bold text-center">Single Discipline</h1>
              <Image src={MuayThai} alt="/"/>
              <p>Drop into any class for $20. Paid at the gym prior to class.</p>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
              <h1 className="font-bold text-center">Unlimited Package</h1>
              <Image src={MMA} alt="/" />
              <p>Drop into any class for $20. Paid at the gym prior to class.</p>
            </div>
        </div>
    </div>
  )
}

export default MembershipPackage
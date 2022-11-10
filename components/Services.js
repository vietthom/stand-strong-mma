import React from 'react'
import Image from 'next/image'
import HeavyBag from '../public/assets/heavybag.jpg'
import { MartialIcons } from '../data/MartialIcons'
import Kickboxing from '../public/assets/icons/kickboxing-icon.png'
import Grappling from '../public/assets/icons/grappling-icon.png'
import MMA from '../public/assets/icons/MMA-icon.png'
import MuayThai from '../public/assets/icons/muaythai_icon.png'
import Silat from '../public/assets/icons/silat-icon.png'
import Workout from '../public/assets/icons/workout-icon.png'

const Services = () => {
  return (
    <div className='max-w-[1240px] w-full h-screen mx-auto grid md:grid-cols-2 border-4 border-black rounded'>
        <Image className='h-[800px] object-cover' src={HeavyBag} alt='/'/>
        <div className= 'flex flex-col items-center bg-white'>
            <div className='text-center'>
                <h1 className='font-bold md:text-6xl sm:text-5xl text-3xl text-red-400 my-[32px] p-4 text-center'>Start your journey</h1>
                <p className='py-2 text-xl'>True to the spirit of mixed martial arts, we offer a variety of disciplines to help meet your personal goals.</p>
                <p>Click on the icons below to learn more about each discipline.</p>
            </div>
            <div className='my-[64px]'>
                <ul className='w-full mx-auto grid md:grid-cols-3 md:grid-rows-2 gap-8'>
                    <li className='border-2 rounded-lg p-4 hover:scale-105 duration-300'>
                        <Image className='w-[125px] h-[125px]'src={Kickboxing} alt='/'/>
                        <p className='font-bold text-center'>Kickboxing</p>
                    </li>
                    <li className='border-2 rounded-lg p-4 hover:scale-105 duration-300'>
                        <Image className='w-[125px] h-[125px]'src={MMA} alt='/'/>
                        <p className='font-bold text-center'>MMA</p>
                    </li>
                    <li className='border-2 rounded-lg p-4 hover:scale-105 duration-300'>
                        <Image className='w-[125px] h-[125px]'src={Grappling} alt='/'/>
                        <p className='font-bold text-center'>Grappling</p>
                    </li>
                    <li className='border-2 rounded-lg p-4 hover:scale-105 duration-300'>
                        <Image className='w-[125px] h-[125px]'src={MuayThai} alt='/'/>
                        <p className='font-bold text-center'>Muay Thai</p>
                    </li>
                    <li className='border-2 rounded-lg p-4 hover:scale-105 duration-300'>
                        <Image className='w-[125px] h-[125px]'src={Silat} alt='/'/>
                        <p className='font-bold text-center'>Pencak Silat</p>
                    </li>
                    <li className='border-2 rounded-lg p-4 hover:scale-105 duration-300'>
                        <Image className='w-[125px] h-[125px]'src={Workout} alt='/'/>
                        <p className='font-bold text-center'>Body Conditioning</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Services
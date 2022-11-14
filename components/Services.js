import React from 'react'
import Image from 'next/image'
import Kickboxing from '../public/assets/icons/kickboxing-icon.png'
import Grappling from '../public/assets/icons/grappling-icon.png'
import MMA from '../public/assets/icons/MMA-icon.png'
import MuayThai from '../public/assets/icons/muaythai_icon.png'
import Silat from '../public/assets/icons/silat-icon.png'
import BJJ from '../public/assets/bjj.png'
import JKD from '../public/assets/icons/JKD.png'

const Services = () =>{
    return(
        <div className='max-w-[1240px] mx-auto w-full h-screen rounded-lg'>
            <h1 className='font-bold md:text-6xl sm:text-5xl text-3xl text-red-400 text-center py-4'>Start your journey</h1>
            <div className='flex flex-col  text-white mx-auto'>
                <p className='py-2 text-xl text-center'>True to the spirit of mixed martial arts, we offer a variety of disciplines to help meet your personal goals.</p>
                <p className='py-2 text-center'>Click on the icons below to learn more about each discipline.</p>
            </div>
            <div className='grid md:grid-cols-2'>
                <Image className='hidden md:block' src={BJJ} alt='/'/>
                <ul className='w-full mx-auto grid md:grid-cols-3 md:grid-rows-2 gap-8 text-white grid-cols-2 grid-rows-2'>
                        <li className=' border-2 rounded-lg hover:scale-105 duration-100 '>
                            <Image className=''src={Kickboxing} alt='/'/>
                            <p className='font-bold text-center text-sm'>Kickboxing</p>
                         </li>
                         <li className='border-2 rounded-lg  hover:scale-105 duration-100'>
                            <Image src={MMA} alt='/'/>
                            <p className='font-bold text-center'>MMA</p>
                         </li>
                         <li className='border-2 rounded-lg  hover:scale-105 duration-100'>
                            <Image src={Grappling} alt='/'/>
                            <p className='font-bold text-center'>Grappling</p>
                        </li>
                         <li className=' border-2 rounded-lg  hover:scale-105 duration-100'>
                            <Image src={MuayThai} alt='/'/>
                            <p className='font-bold text-center'>Muay Thai</p>
                         </li>
                         <li className='border-2 rounded-lg  hover:scale-105 duration-100'>
                            <Image src={Silat} alt='/'/>
                            <p className='font-bold text-center'>Pencak Silat</p>
                         </li>
                         <li className='border-2 rounded-lg  hover:scale-105 duration-100'>
                            <Image src={JKD} alt='/'/>
                            <p className='font-bold text-center'>Jeet Kune Do</p>
                         </li>
                     </ul>
            </div>
        </div>
    )
}

export default Services
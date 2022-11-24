import React from 'react'
import Banner from '../components/Banner'
import Image from 'next/image'
import Gym from '../public/assets/gym.jpeg';


const about = () => {
  return (
    <div className='container mx-auto px-10 text-white'>
      <Banner />
      <div className='w-full py-10'>
        <h1 className='font-bold text-3xl uppercase'>Who are we?</h1>
        <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. 
          Quis risus sed vulputate odio ut. Aliquet risus feugiat in ante metus dictum. 
          Augue ut lectus arcu bibendum at varius vel pharetra vel. Et sollicitudin ac orci phasellus egestas tellus. Sagittis orci a scelerisque purus semper eget duis at tellus. 
          Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Metus aliquam eleifend mi in nulla. 
          Tortor posuere ac ut consequat. Eu facilisis sed odio morbi quis commodo odio.</p>
      </div>
      <div className='w-full grid md:grid-cols-2'>
        <div>
        <h1 className='font-bold text-3xl uppercase'>Our Facility</h1>
        <p className='pt-2'>Augue ut lectus arcu bibendum at varius vel pharetra vel. Et sollicitudin ac orci phasellus egestas tellus. Sagittis orci a scelerisque purus semper eget duis at tellus. 
          Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Metus aliquam eleifend mi in nulla. 
          Tortor posuere ac ut consequat. Eu facilisis sed odio morbi quis commodo odio. Augue ut lectus arcu bibendum at varius vel pharetra vel. Et sollicitudin ac orci phasellus egestas tellus. Sagittis orci a scelerisque purus semper eget duis at tellus. 
          Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Metus aliquam eleifend mi in nulla. 
          Tortor posuere ac ut consequat. Eu facilisis sed odio morbi quis commodo odio. Augue ut lectus arcu bibendum at varius vel pharetra vel. Et sollicitudin ac orci phasellus egestas tellus. Sagittis orci a scelerisque purus semper eget duis at tellus. 
          Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Metus aliquam eleifend mi in nulla. 
          Tortor posuere ac ut consequat. Eu facilisis sed odio morbi quis commodo odio.</p>
        </div>
        <Image src={Gym} alt='Gym'/>
      </div>
      <div className='w-full pt-10'>
        <h1 className='font-bold text-3xl text-center uppercase'>meet our instructors</h1>
        <div>
          <div>
            Image
            <h2>Name</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
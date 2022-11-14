import MuayThai from '../public/assets/muaythai.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='max-w-[1240px] w-full h-screen mx-auto grid md:grid-cols-2 text-white'>
        <div className='xl:pl-0 lg:pl-6 md:pl-4 pl-6 flex flex-col items-start mt-[96px]'>
           <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold text-red-400 py-4'>Welcome to Stand Strong MMA</h1>
           <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>We believe in creating a safe, supportive, and inclusive space for all skill levels. We love training and teaching martial arts, and look forward to sharing our passion with you! </p>
           <h2 className='md:text-2xl text-xl font-bold text-gray-500 '>Interested in training with us?</h2>
           <button className='bg-red-400 w-[200px] rounded-md font-medium my-6 py-3'>Sign Up Here</button>
        </div>
        <div className='flex justify-center overflow-auto'>
          <Image style={{width:'auto', height:'auto'}} className='hidden md:block' src={MuayThai} alt='/'/>
        </div>
    </div>
        
  )
}

export default Hero
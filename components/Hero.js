import MuayThai from '../public/assets/muaythai.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='max-w-[1240px] w-full h-screen mx-auto grid md:grid-cols-2 text-white'>
        <div>
           <h1>Welcome to Stand Strong MMA</h1>
           <p>Develop your mind, body, and spirit through mixed martial arts at Stand Strong MMA</p>
           <button>Sign Up</button>
        </div>
        <Image src={MuayThai} alt='/'/>
    </div>
  )
}

export default Hero
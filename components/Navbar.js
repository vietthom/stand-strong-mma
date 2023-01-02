import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';


export const Navbar = () => {
    const [nav, setNav]=useState(false);

    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <div className="text-white container mx-auto px-4 h-24 flex items-center">
        <h1 className="w-full font-bold text-3xl text-red-400">
          <Link href='/'>Stand Strong MMA</Link>
        </h1>
        <ul className="hidden md:flex">
            <li className="p-4"><Link href='/'>Home</Link></li>
            <li className="p-4"><Link href='/about'>About</Link></li>
            <li className="p-4"><Link href='/classes'>Classes</Link></li>
            <li className="p-4"><Link href='/membership'>Membership</Link></li>
            <li className="p-4"><Link href='/contact'>Contact</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold m-4 text-red-400'>Stand Strong MMA</h1>
          <li className='p-4 border-b border-gray-600'><Link href="/">Home</Link></li>
          <li className='p-4 border-b border-gray-600'><Link href="/about">About</Link></li>
          <li className='p-4 border-b border-gray-600'><Link href="/classes">Classes</Link></li>
          <li className='p-4 border-b border-gray-600'><Link href="/membership">Membership</Link></li>
          <li className='p-4 border-b border-gray-600'><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;


import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

const navigation={
    main: [
        {name: 'About', href: '/about'}, 
        {name: 'Classes', href: '/classes'},
        {name: 'Membership', href: '/membership'},
        {name: 'Contact', href: '/contact'},
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: ()=>(
                <FaFacebook />
            ),
        },
        {
            name: 'Twitter', 
            href: '#',
            icon: ()=>(
                <FaTwitter />
            )
        },
        {
            name: 'Github',
            href: '#',
            icon: ()=>(
                <FaGithub />
            )
        },
        {
            name: 'Instagram',
            href: '#', 
            icon: ()=>(
                <AiFillInstagram />
            )
        } 
    ]
};

const Footer = () => {
  return (
    <div className='mx-auto max-w-[1240px] overflow-hidden py-12 px-4 sm:px-6 lg:px-8'>
        <div className='-mx-5 -my-2 flex flew-wrap justify-center' aria-label="Footer">
            {navigation.main.map((item) =>(
                <div key={item.name} className='px-5 py-2'>
                    <a href={item.href} className='text-base text-gray-500 hover:text-red-400'>
                        {item.name}
                    </a>
                </div>
            ))}
        </div>
        <div className='mt-8 flex justify-center space-x-6'>
            {navigation.social.map((item)=>(
                <a key={item.name} href={item.href} className='text-gray-400 hover:text-red-400'>
                    <span className='sr-only'>{item.name}</span>
                    <item.icon />
                </a>
            ))}
        </div>
        <p className='mt-8 text-center text-base text-gray-400'>2020 Stand Strong MMA, Inc. All rights reserved.</p>
    </div>
  )
}

export default Footer
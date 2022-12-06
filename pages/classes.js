import React from 'react'
import Schedule from '../components/Schedule'
import Disciplines from '../data/disciplines';

const classes = () => {
  return (
    <div>
        <Schedule />
        <div className='container mx-auto'>
          <div>
            {Disciplines.map((discipline) => (
              <div key={discipline} className='text-white'>
                <h1 key={discipline.href} className='text-2xl font-bold uppercase py-8 text-red-400'>{discipline.name}</h1>
                <p>{discipline.desc}</p>    
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default classes
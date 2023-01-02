import React from 'react'

import Banner from '../components/Banner'
import Training from '../public/assets/training.jpg'

const membership = () => {
  return (
    <div>
      <Banner 
        imgUrl={Training}
        title="Membership"
      />
    </div>
  )
}

export default membership
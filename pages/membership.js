import React from 'react'

import Banner from '../components/Banner'
import Training from '../public/assets/training.jpg'
import MembershipPackage from '../components/MembershipPackage'
const membership = () => {
  return (
    <div>
      <Banner 
        imgUrl={Training}
        title="Membership"
      />
      <div className="container mx-auto mt-16">
        <h1 className="font-bold text-white">Here at Stand Strong MMA, we believe in no nonsense approach to membership. No contracts, no sign-up fees, no cancellation fees! Sign the waiver and pick a plan that works best for you, and get to training! Members are responsible for paying their fees on time. See you on the mats!</h1>
        <MembershipPackage />
      </div>
    </div>
  )
}

export default membership
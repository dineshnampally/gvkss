import React from 'react'
import CareerHero from './carrer-comp/CareerHero'
import CareerForm from './carrer-comp/CareerForm'

const Career = () => {
  return (
    <div>
      {/**career hero section */}
      <CareerHero/>
      {/** jobs available section */}
      <CareerForm/>
      {/** Applying Details*/}
    </div>
  )
}

export default Career
import React from 'react'
import AboutHero from './about-comp/AboutHero'
import Services from './about-comp/Services'
import Team from './about-comp/Team'
import Location from './about-comp/Location'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      {/**hero section */}
      <AboutHero/>
      {/**our services */}
      <Services/>
      {/**Our Team */}
      <Team/>
      {/**map */}
      <Location/>
    </div>
  )
}

export default About
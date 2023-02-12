import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Activities from '../Activities/Activities'
import WelcomeSection from '../Welcome/WelcomeSection'
import CausesSection from '../Causes/CausesSection'
import ChangeHumanitySection from '../ChangeHumanity/ChangeHumanitySection'
import Testimonials from '../Testimonials/Testimonials'
import CountdownSection from '../CountdownSection/CountdownSection'
import Footer from '../Footer/Footer'

const Home = () => {
  const [nav, setNav] = useState(false);
  const navHandler = () => {
    setNav(!nav);
  };
  return (
    <div className=' overflow-hidden' onClick={navHandler}>
      <Navbar nav={nav} setNav={setNav} />
      <Hero />
      <Activities />
      <WelcomeSection />
      <CausesSection />
      <ChangeHumanitySection />
      <Testimonials />
      <CountdownSection />
      <Footer /> 
    </div>
  )
}

export default Home
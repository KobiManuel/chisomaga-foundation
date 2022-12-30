import React from 'react'
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
  return (
    <div>
      <Navbar />
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
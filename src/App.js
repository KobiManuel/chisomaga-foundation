import React from 'react'
import Activities from './components/Activities/Activities';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import WelcomeSection from './components/Welcome/WelcomeSection';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Activities />
      <WelcomeSection />
    </div>
  );
}

export default App;

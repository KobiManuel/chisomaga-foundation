import React from "react";
import Activities from "./components/Activities/Activities";
import CausesSection from "./components/Causes/CausesSection";
import ChangeHumanitySection from "./components/ChangeHumanity/ChangeHumanitySection";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";
import WelcomeSection from "./components/Welcome/WelcomeSection";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Activities />
      <WelcomeSection />
      <CausesSection />
      <ChangeHumanitySection />
      <Testimonials />
    </div>
  );
}

export default App;

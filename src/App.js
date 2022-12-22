import React from "react";
import Activities from "./components/Activities/Activities";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import WelcomeSection from "./components/Welcome/WelcomeSection";
import CausesCard from "./components/Cards/CausesCard";
import { causesInfo } from "./components/ComponentData/CausesCard_data";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Activities />
      <WelcomeSection />
      <ul className=" flex flex-wrap gap-6 justify-center items-center">
        {causesInfo.map(
          ({ image, subtitle, progress, raisedAmount, goal }) => (
            <CausesCard
              image={image}
              subtitle={subtitle}
              progress={progress}
              raisedAmount={raisedAmount}
              goal={goal}
              key={Math.random().toString()}
            />
          )
        )}
      </ul>
    </div>
  );
}

export default App;

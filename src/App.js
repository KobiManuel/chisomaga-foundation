import React from "react";
import ApplicationForm from "./components/Pages/Donation_Page/DonatePage";
import Home from "./components/Pages/Landing_Page/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DonatePage from "./components/Pages/Donation_Page/DonatePage";
function App() {
  return (
    <div className=" overflow-hidden">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/donate" element={ <DonatePage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

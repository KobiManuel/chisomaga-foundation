import React from "react";
import ApplicationForm from "./components/Pages/Apply_For_Grant/ApplicationForm";
import Home from "./components/Pages/Landing_Page/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className=" overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={ <ApplicationForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

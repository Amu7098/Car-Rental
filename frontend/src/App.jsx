import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import CarDetails from "./pages/CarDetails"
import Cars from "./pages/Car"
import MyBookings from "./pages/MyBookings"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CarDetails" element={<CarDetails />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/MyBookings" element={<MyBookings />} />
      </Routes>
    </div>
  );
}

export default App
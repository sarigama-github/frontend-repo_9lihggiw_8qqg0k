import React from 'react'
import Hero from './components/Hero'
import WeeklyMenu from './components/WeeklyMenu'
import Plans from './components/Plans'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <WeeklyMenu />
      <Plans />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App

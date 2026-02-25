import React from 'react'
import Banner from '../components/Banner'
import FeatureSection from '../components/FeatureSection'
import CarBanner from '../components/CarBanner'
import Testimonials from '../components/Testimonials'
function Home() {
  return (
    <div><Banner/>
    <FeatureSection/>
    <CarBanner/>
    <Testimonials/>
    </div>
  )
}

export default Home
import React from 'react'
import Banner from '../components/Banner'
import FeatureSection from '../components/FeatureSection'
import CarBanner from '../components/CarBanner'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
function Home() {
  return (
    <div><Banner/>
    <FeatureSection/>
    <CarBanner/>
    <Testimonials/>
    <Newsletter/>
    </div>
  )
}

export default Home
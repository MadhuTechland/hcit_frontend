import React from 'react'
import Hero from './Hero'
import HomeAbout from './HomeAbout'
import HomeServices from './HomeServices'
import HomeLatestNews from './HomeLatestNews'
import HomeCaseStudies from './HomeCaseStudies'
import HomeOurIndustry from './HomeOurIndustry'
import HomeEvents from './HomeEvents'
import HomeTestimonials from './HomeTestimonials'
import HomeContact from './HomeContact'

const HomePage = () => {
  return (
    <div>
      <div id="smooth-content">
        <Hero />
        <HomeServices />
        <HomeLatestNews />
        <HomeCaseStudies />
        <HomeOurIndustry />
        <HomeEvents />
        <HomeTestimonials />
        <HomeContact />
      </div>
    </div>
  )
}

export default HomePage
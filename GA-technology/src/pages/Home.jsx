import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import CompanyOverview from '../components/CompanyOverview'
import Partners from '../components/Partners'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <CompanyOverview/>
      <Partners/>
      <ContactUs/>
    </div>
  )
}

export default Home

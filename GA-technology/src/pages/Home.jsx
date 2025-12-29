import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import CompanyOverview from '../components/CompanyOverview'
import Partners from '../components/Partners'

const Home = () => {
  return (
    <div>
      <Header/>
      <CompanyOverview/>
      <Partners/>
    </div>
  )
}

export default Home

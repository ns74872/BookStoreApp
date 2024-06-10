import React from 'react'
import Navbar from '../components/Navbar'
import Freebooks from '../components/Freebooks'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <>
    <div>
    <Navbar />
    <Banner />
    <Freebooks/>
    <Footer />
    </div>
    </>
  )
}

export default Home

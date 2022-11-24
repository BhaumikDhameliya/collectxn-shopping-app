import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16.5 tablet:pt-22">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout

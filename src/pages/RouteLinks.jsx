import React from 'react'

import { Link } from 'react-router-dom'

const RouteLinks = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex justify-center items-center">
      <div className="flex gap-2">
        <Link to="/auth/signup">Sign up</Link>
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/cooming-soon">Comming soon</Link>
        <Link to="/auth/verify-otp">verify otp</Link>
      </div>
    </div>
  )
}

export default RouteLinks

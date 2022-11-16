import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import CoomingSoon from './pages/CoomingSoon'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'
import Signup from './pages/Signup'
import VerifyOtp from './pages/VerifyOtp'

export default function App() {
  return (
    <div className="text-black-mate">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/auth">
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="cooming-soon" element={<CoomingSoon />} />
          <Route path="verify-otp" element={<VerifyOtp />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

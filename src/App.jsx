import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Apparels from './pages/Apparels'

import CoomingSoon from './pages/CoomingSoon'
import Home from './pages/Home'
import Jewellery from './pages/Jewellery'
import Layout from './pages/Layout'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'
import RouteLinks from './pages/RouteLinks'
import Signup from './pages/Signup'
import Sneakers from './pages/Sneakers'
import VerifyOtp from './pages/VerifyOtp'

export default function App() {
  return (
    <div className="text-black-mate">
      <Routes>
        <Route path="routes" element={<RouteLinks />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="apparels" element={<Apparels />} />
          <Route path="jewellery" element={<Jewellery />} />
          <Route path="sneakers" element={<Sneakers />} />
        </Route>
        <Route path="/auth">
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="cooming-soon" element={<CoomingSoon />} />
          <Route path="verify-otp" element={<VerifyOtp />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

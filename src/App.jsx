import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import ProductInfo from './layouts/ProductInfo'
import ProductListing from './layouts/ProductListing'

// import Apparels from './pages/Apparels'
// import Assecersories from './pages/Assecersories'
// import Jewellery from './pages/Jewellery'
// import PlayStation from './pages/Playstation'
// import Sneakers from './pages/Sneakers'

import Checkout from './pages/Checkout'
import OrderPlaced from './pages/Checkout/OrderPlaced'
import CoomingSoon from './pages/CoomingSoon'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'
import RequestProduct from './pages/RequestProduct/RequestProduct'
import RouteLinks from './pages/RouteLinks'
import ShoppingBag from './pages/ShoppingBag'
import Signup from './pages/Signup'
import VerifyOtp from './pages/VerifyOtp'

export default function App() {
  return (
    <div className="text-black-mate min-h-screen">
      <Routes>
        <Route path="routes" element={<RouteLinks />} />
        <Route path="/auth">
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="cooming-soon" element={<CoomingSoon />} />
          <Route path="verify-otp" element={<VerifyOtp />} />
        </Route>
        <Route path="request-product" element={<RequestProduct />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category/:categoryId" element={<ProductListing />} />
          <Route path="product/:productId" element={<ProductInfo />} />
          {/* <Route path="apparels" element={<Apparels />} />
          <Route path="jewellery" element={<Jewellery />} />
          <Route path="sneakers" element={<Sneakers />} />
          <Route path="playstation" element={<PlayStation />} />
          <Route path="assecersories" element={<Assecersories />} /> */}
        </Route>
        <Route path="/order-placed" element={<OrderPlaced />} />
        <Route path="/shopping-bag" element={<ShoppingBag />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

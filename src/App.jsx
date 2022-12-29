import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import ProductInfo from './layouts/ProductInfo'
import ProductListing from './layouts/ProductListing'

// import Apparels from './pages/Apparels'
// import Assecersories from './pages/Assecersories'
// import Jewellery from './pages/Jewellery'
// import PlayStation from './pages/Playstation'
// import Sneakers from './pages/Sneakers'

import OrderPlaced from './pages/Checkout/OrderPlaced'
import CoomingSoon from './pages/CoomingSoon'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'
import Profile from './pages/Profile'
import RequestProduct from './pages/RequestProduct/RequestProduct'
import RouteLinks from './pages/RouteLinks'
import ShoppingBag from './pages/ShoppingBag'
import Signup from './pages/Signup'
import VerifyOtp from './pages/VerifyOtp'

import { collectionAPI } from './utils/axios/axios.utils'
import { getUserProfile } from './api/user.api'
import { setUserProfile } from './features/user/userSlice'
import { setCategories } from './features/category/categorySlice'
import { getCategories } from './api/categories.api'

export default function App() {
  const dispatch = useDispatch()
  const getUserProfileData = useCallback(async () => {
    const res = await getUserProfile()
    const userP = res?.data?.user
    if (!userP) {
      localStorage.removeItem('authToken')
    }
    dispatch(setUserProfile(userP))
  }, [dispatch])

  const getCategoryData = useCallback(async () => {
    const res = await getCategories()
    const catList = res?.data?.categories
    if (catList) {
      let categories = {}
      catList.forEach((cat) => {
        categories[cat.id] = cat
      })
      dispatch(setCategories(categories))
    }
  }, [dispatch])

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    if (authToken) {
      collectionAPI.defaults.headers.common['Authorization'] = authToken
      getUserProfileData()
    }
    getCategoryData()
  }, [getUserProfileData, getCategoryData])

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
        <Route path="profile" element={<Profile />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

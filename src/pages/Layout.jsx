import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { collectionAPI } from '../utils/axios/axios.utils'

import { getUserProfile } from '../api/user.api'

import { setUserProfile } from '../features/user/userSlice'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Layout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let location = useLocation()

  const getUserProfileData = useCallback(async () => {
    const res = await getUserProfile()
    const userP = res?.data?.user
    if (!userP) {
      localStorage.removeItem('authToken')
      navigate('/auth/login', { replace: true })
      return
    }
    dispatch(setUserProfile(userP))
  }, [dispatch, navigate])

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    if (!authToken) {
      // navigate('/auth/login', { replace: true })
    } else {
      collectionAPI.defaults.headers.common['Authorization'] = authToken
      getUserProfileData()
    }
  }, [getUserProfileData, navigate])

  return (
    <div>
      <Navbar />
      {location.pathname === '/' ? (
        <Outlet />
      ) : (
        <div className="pt-16.5 tablet:pt-22">
          <Outlet />
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Layout

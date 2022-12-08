import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Navbar from '../../components/Navbar'

const Profile = () => {
  const navigate = useNavigate()
  const userProfile = useSelector((state) => state.user.profile)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!Object.keys(userProfile)?.length) {
        navigate('/auth/login')
      }
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [navigate, userProfile])

  return (
    <div>
      <Navbar />
      <div className="pt-16.5 tablet:pt-22 min-h-screen flex">
        <div>
          <div className="flex items-center justify-between p-4 gap-2 5 border-b border-black-mate">
            <div className="flex items-center justify-center gap-3">
              <div className="relative flex items-center justify-center">
                <div className="bg-[url('/src/assets/img/profile_round_bg.png')] bg-contain bg-no-repeat w-12 h-12 flex items-center justify-center">
                  <span>{userProfile?.name?.charAt(0) || 'J'}</span>
                </div>
                <p>{userProfile?.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

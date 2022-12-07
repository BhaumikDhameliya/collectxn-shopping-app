import React from 'react'
import { useSelector } from 'react-redux'

import Navbar from '../../components/Navbar'

const Profile = () => {
  const userProfile = useSelector((state) => state.user.profile)
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

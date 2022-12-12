import React from 'react'
import { useSelector } from 'react-redux'

const ProfileCardLaptop = (props) => {
  const { selectedTab, setSelectedTab } = props

  const userProfile = useSelector((state) => state.user.profile)
  return (
    <div className="border rounded-md divide-y">
      <div className="relative flex flex-col items-center justify-center gap-3 p-8">
        <div className="bg-[url('/src/assets/img/profile_round_bg.png')] bg-contain bg-no-repeat w-12 h-12 flex items-center justify-center">
          <span>{userProfile?.name?.charAt(0) || 'J'}</span>
        </div>
        <p className="font-medium text-xl ">{userProfile?.name}</p>
      </div>
      <div className="flex flex-col items-center justify-around divide-y">
        <div
          className={`flex w-full px-4 py-3 ${
            selectedTab === 'orders' ? 'bg-black text-white' : ''
          }`}
          onClick={() => {
            setSelectedTab('orders')
          }}
        >
          Orders
        </div>
        <div
          className={`flex w-full px-4 py-3 ${
            selectedTab === 'profile' ? 'bg-black text-white' : ''
          }`}
          onClick={() => {
            setSelectedTab('profile')
          }}
        >
          My Profile
        </div>
        <div
          className={`flex w-full px-4 py-3 ${
            selectedTab === 'wishlist' ? 'bg-black text-white' : ''
          }`}
          onClick={() => {
            setSelectedTab('wishlist')
          }}
        >
          Wishlist
        </div>
      </div>
    </div>
  )
}

export default ProfileCardLaptop

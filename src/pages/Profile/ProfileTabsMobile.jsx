import React from 'react'

const ProfileTabsMobile = (props) => {
  const { selectedTab, setSelectedTab } = props

  return (
    <div className="flex items-center justify-around w-full">
      <div
        className={`flex px-4 py-3 ${
          selectedTab === 'orders' ? 'border-b-5 border-punchy-neon' : ''
        }`}
        onClick={() => {
          setSelectedTab('orders')
        }}
      >
        Orders
      </div>
      <div
        className={`flex px-4 py-3 ${
          selectedTab === 'profile' ? 'border-b-5 border-punchy-neon' : ''
        }`}
        onClick={() => {
          setSelectedTab('profile')
        }}
      >
        My Profile
      </div>
      <div
        className={`flex px-4 py-3 ${
          selectedTab === 'wishlist' ? 'border-b-5 border-punchy-neon' : ''
        }`}
        onClick={() => {
          setSelectedTab('wishlist')
        }}
      >
        Wishlist
      </div>
    </div>
  )
}

export default ProfileTabsMobile

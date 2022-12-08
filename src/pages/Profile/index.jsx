import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Navbar from '../../components/Navbar'

import LogoutSVG from '../../assets/svg/logout_rounded.svg'
import TextInput from '../../components/Input/TextInput'
import AddressCard from '../../components/Card/AddressCard'

const addressList = [
  {
    name: 'address 1',
    addressLine1: '15 Changi Business Park Cres',
    addressLine2: 'Bidadari Park Drive - Singapore',
  },
  {
    name: 'address 2',
    addressLine1: '18 Changi Business Park Cres',
    addressLine2: 'Park Drive - India',
  },
]

const Profile = () => {
  const navigate = useNavigate()
  const userProfile = useSelector((state) => state.user.profile)

  const [selectedTab, setSelectedTab] = useState('profile')

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
        <div className="flex flex-col divide-y divide-black min-w-full">
          <div className="flex items-center justify-between p-4 gap-2 5">
            <div className="flex items-center justify-between gap-3 min-w-full">
              <div className="relative flex items-center justify-center gap-3">
                <div className="bg-[url('/src/assets/img/profile_round_bg.png')] bg-contain bg-no-repeat w-12 h-12 flex items-center justify-center">
                  <span>{userProfile?.name?.charAt(0) || 'J'}</span>
                </div>
                <p className="font-medium text-xl ">{userProfile?.name}</p>
              </div>
              <div className="flex items-center px-4 py-3 gap-2 bg-gray-extra-light rounded-full">
                <div>
                  <img src={LogoutSVG} alt="LogoutSVG" className="w-4 h-4" />
                </div>
                <div className="font-medium text-13">Logout</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around">
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
                selectedTab === 'wishlist'
                  ? 'border-b-5 border-punchy-neon'
                  : ''
              }`}
              onClick={() => {
                setSelectedTab('wishlist')
              }}
            >
              Wishlist
            </div>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between gap-2.5 pt-3 pb-4 border-b border-gray-light">
                <div className="font-medium text-xl">Account info</div>
                <button className="flex items-center justify-center px-4 py-2 gap-2.5 bg-gray-mid rounded-full">
                  <p className="font-medium text-13 text-white">save changes</p>
                </button>
              </div>
              <div className="flex flex-col gap-8 font-cera-pro font-semibold">
                <TextInput labelText="Full Name" placeHolder="John Doe" />
                <TextInput labelText="Mobile Number" buttonText="change" />
                <TextInput labelText="Email ID" buttonText="change" />
              </div>
              <div>
                <div className="flex items-center justify-between gap-2.5 pt-3 pb-4 border-b border-gray-light">
                  <div className="font-medium text-xl">Shipping Address</div>
                  <button className="flex items-center justify-center px-4 py-2 gap-2.5 bg-black-mate rounded-full">
                    <p className="font-medium text-13 text-white">
                      Add address
                    </p>
                  </button>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  {addressList.map((address, index) => {
                    return (
                      <div className="" key={index}>
                        <AddressCard address={address} showRadio={false} />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

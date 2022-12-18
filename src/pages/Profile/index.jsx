import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import Navbar from '../../components/Navbar'

import LogoutSVG from '../../assets/svg/logout_rounded.svg'
import TextInput from '../../components/Input/TextInput'
import AddressCard from '../../components/Card/AddressCard'
import Wishlist from './Wishlist'
import ProfileOrders from './ProfileOrders'
import Breadcrumbs from '../../components/Breadcrumbs'
import ProfileTabsMobile from './ProfileTabsMobile'
import ProfileCardLaptop from './ProfileCardLaptop'
import { logout } from '../../utils/firebase/firebase.utils'
import AddAddressModal from '../../features/user/AddAddressModal'
import { toast } from 'react-toastify'
import ChangeEmailModal from '../../features/user/ChangeEmailModal'
import ChangeMobileModal from '../../features/user/ChangeMobileModal'

export const profileSchemaResolver = yupResolver(
  yup.object().shape({
    email: yup.string(),
    mobile: yup.string(),
    name: yup.string().required('Please enter Your name'),
  }),
)

const Profile = () => {
  const navigate = useNavigate()
  const userProfile = useSelector((state) => state.user.profile)

  const [selectedTab, setSelectedTab] = useState('profile')
  const [showAddAddress, setShowAddAddress] = useState(false)
  const [showChangeEmail, setShowChangeEmail] = useState(false)
  const [showChangeMobile, setShowChangeMobile] = useState(false)

  const toggleShowAddress = () => setShowAddAddress((prev) => !prev)
  const toggleShowChageEmail = () => setShowChangeEmail((prev) => !prev)
  const toggleShowChageMobile = () => setShowChangeMobile((prev) => !prev)

  const {
    formState: { isDirty, errors },
    handleSubmit,
    register,
    // watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {},
    resolver: profileSchemaResolver,
  })

  const onSubmit = async (data) => {
    // const addressRes = await createAddress(data)
    // const addressData = addressRes?.data?.address
    if (true) {
      reset()
      toast.success('Profile updated successfully')
      // dispatch(addDeliveryAddress(addressData))
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.keys(userProfile || {})?.length) {
        setValue('email', userProfile?.email || '')
        setValue('mobile', userProfile?.mobile || '')
        setValue('name', userProfile?.name || '')
      } else {
        navigate('/auth/login')
      }
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [navigate, setValue, userProfile])

  return (
    <>
      <div>
        <Navbar />
        <div className="pt-16.5 tablet:pt-22 min-h-screen flex laptop:flex-col">
          <div className="hidden laptop:block">
            <Breadcrumbs
              path={[{ text: 'home', to: '/' }, { text: 'My Profile' }]}
            />
          </div>
          <div className="flex flex-col divide-y divide-black laptop:divide-y-0 min-w-full laptop:flex-row laptop:px-20">
            <div className="flex items-center justify-between p-4 gap-2.5 laptop:hidden">
              <div className="flex items-center justify-between gap-3 min-w-full">
                <div className="relative flex items-center justify-center gap-3">
                  <div className="bg-[url('/src/assets/img/profile_round_bg.png')] bg-contain bg-no-repeat w-12 h-12 flex items-center justify-center">
                    <span>{userProfile?.name?.charAt(0) || 'J'}</span>
                  </div>
                  <p className="font-medium text-xl ">{userProfile?.name}</p>
                </div>
                <button
                  className="flex items-center px-4 py-3 gap-2 bg-gray-extra-light rounded-full"
                  onClick={logout}
                >
                  <div>
                    <img src={LogoutSVG} alt="LogoutSVG" className="w-4 h-4" />
                  </div>
                  <div className="font-medium text-13">Logout</div>
                </button>
              </div>
            </div>
            <div className="flex items-center w-full laptop:hidden">
              <ProfileTabsMobile {...{ selectedTab, setSelectedTab }} />
            </div>
            <div className="hidden laptop:flex flex-col">
              <ProfileCardLaptop {...{ selectedTab, setSelectedTab }} />
            </div>

            <div className="flex flex-col flex-grow p-4 tablet:p-8 laptop:p-4 ">
              <div className="hidden laptop:flex py-3 gap-2.5">
                <p className="font-bold text-31">
                  {selectedTab === 'profile' && 'My Profile'}
                </p>
              </div>
              {selectedTab === 'wishlist' && <Wishlist />}
              {selectedTab === 'orders' && <ProfileOrders />}
              {selectedTab === 'profile' && (
                <div className="flex flex-col gap-8 laptop:pl-13 laptop:pt-8">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-8"
                  >
                    <div className="flex items-center justify-between gap-2.5 pt-3 pb-4 border-b border-gray-light">
                      <div className="font-medium text-xl">Account info</div>
                      <button
                        type="submit"
                        className={`flex items-center justify-center px-4 py-2 gap-2.5 rounded-full bg-black-mate disabled:bg-gray-mid`}
                        disabled={!isDirty}
                      >
                        <p className="font-medium text-13 text-white">
                          save changes
                        </p>
                      </button>
                    </div>
                    <div className="flex flex-col gap-8 font-cera-pro font-meduim">
                      <div className="flex flex-col tablet:flex-row gap-8">
                        <TextInput
                          labelText="Full Name"
                          placeholder="John Doe"
                          name="name"
                          {...{ register, errors }}
                        />
                        <TextInput
                          labelText="Mobile Number"
                          buttonText="change"
                          onButtonClick={toggleShowChageMobile}
                          name="mobile"
                          {...{ register, errors }}
                        />
                      </div>
                      <div className="flex tablet:max-w-md">
                        <TextInput
                          labelText="Email ID"
                          buttonText="change"
                          onButtonClick={toggleShowChageEmail}
                          name="email"
                          {...{ register, errors }}
                        />
                      </div>
                    </div>
                  </form>
                  <div>
                    <div className="flex items-center justify-between gap-2.5 pt-3 pb-4 border-b border-gray-light">
                      <div className="font-medium text-xl">
                        Shipping Address
                      </div>
                      <button
                        className="flex items-center justify-center px-4 py-2 gap-2.5 bg-black-mate rounded-full"
                        onClick={toggleShowAddress}
                      >
                        <p className="font-medium text-13 text-white">
                          Add address
                        </p>
                      </button>
                    </div>
                    {!!userProfile?.DeliveryAddresses?.length && (
                      <div className="flex flex-col gap-4 tablet:gap-6 mt-8 tablet:grid tablet:grid-cols-2">
                        {userProfile?.DeliveryAddresses?.map((address) => {
                          return (
                            <div className="" key={address.id}>
                              <AddressCard
                                address={address}
                                showRadio={false}
                              />
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <AddAddressModal
        {...{ isOpen: showAddAddress, setIsOpen: setShowAddAddress }}
      />
      <ChangeEmailModal
        {...{ isOpen: showChangeEmail, setIsOpen: setShowChangeEmail }}
      />
      <ChangeMobileModal
        {...{ isOpen: showChangeMobile, setIsOpen: setShowChangeMobile }}
      />
    </>
  )
}

export default Profile

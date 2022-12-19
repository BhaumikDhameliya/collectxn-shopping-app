import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { ReactComponent as ShieldSVG } from '../../assets/svg/shield.svg'

import PopButton from '../../components/buttons/PopButton'
import AddressCard from '../../components/Card/AddressCard'
import AddAddressModal from '../../features/user/AddAddressModal'

const AddressAndBilling = () => {
  const userProfile = useSelector((state) => state.user.profile)
  const cart = useSelector((state) => state.cart.cart)

  const [showAddAddress, setShowAddAddress] = useState(false)
  const [totalAmount, setTotalAmount] = useState(0)

  const toggleShowAddress = () => setShowAddAddress((prev) => !prev)

  useEffect(() => {
    if (cart?.cartItems) {
      const totalPrice = cart.cartItems?.reduce((total, cartItem) => {
        const itemPrice = cartItem?.price * cartItem?.quantity
        total += itemPrice
        return total
      }, 0)
      setTotalAmount(totalPrice)
    }
  }, [cart])

  return (
    <>
      <div className="flex flex-col w-full laptop:bg-[#FAFAFA] laptop:border laptop:rounded-10">
        <div className="flex flex-col px-4 tablet:px-8 pt-4 pb-6 gap-4">
          <div className="flex items-center justify-between py-4 pt-4 pb-6 gap-4">
            <p className="font-bold text-xl">Shipping Address</p>
            <div>
              <PopButton btnClasses="bg-black-mate" onClick={toggleShowAddress}>
                Add address
              </PopButton>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {userProfile?.DeliveryAddresses?.map((address, index) => {
              return (
                <div className="" key={index}>
                  <input
                    type="checkbox"
                    id={address.name}
                    name={address.name}
                    className="accent-black-mate peer hidden"
                  />
                  <AddressCard address={address} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col px-4 tablet:px-8 py-6 border-t border-gray-light">
          <div className="flex pb-3">
            <p className="font-bold text-xl">Billing</p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col pt-2.5 pb-5 border-b gap-2.5 flex-grow">
              <div className="flex items-center justify-between flex-grow gap-2.5">
                <p>Price (2 items)</p>
                <p>₹21,398.00</p>
              </div>
              <div className="flex items-center justify-between flex-grow gap-2.5">
                <p>Discount on MRP</p>
                <p>-₹5000.00</p>
              </div>
              <div className="flex items-center justify-between flex-grow gap-2.5">
                <p>Delivery Charges</p>
                <p>Free</p>
              </div>
            </div>
            <div className="flex items-center justify-between flex-grow font-cera-pro font-bold gap-2.5 py-3">
              <p>Total Amount</p>
              <p>₹{totalAmount}</p>
            </div>
          </div>
        </div>
        <div className="hidden laptop:flex flex-col items-center px-4 tablet:px-8 py-3 gap-5 relative bottom-0 w-full">
          <PopButton btnClasses="bg-black-mate">Place order</PopButton>
          <div className="flex items-center px-2 py-1 gap-2">
            <div>
              <ShieldSVG />
            </div>
            <p className="font-cera-pro font-medium">100% Secure</p>
          </div>
        </div>
      </div>
      <AddAddressModal
        {...{ isOpen: showAddAddress, setIsOpen: setShowAddAddress }}
      />
    </>
  )
}

export default AddressAndBilling

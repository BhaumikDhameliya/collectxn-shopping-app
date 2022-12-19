import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { deleteAddress, updateAddress } from '../../api/addresses.api'
import EditAddressModal from '../../features/user/EditAddressModal'
import {
  makeDefaultDeliveryAddress,
  removeDeliveryAddress,
} from '../../features/user/userSlice'

const AddressCard = (props) => {
  const { address, showRadio = true, isSelected } = props
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)

  const hanldeMakeDefault = async () => {
    const addressRes = await updateAddress(address.id, { isDefault: true })
    if (addressRes?.status === 200) {
      dispatch(makeDefaultDeliveryAddress({ ...address, isDefault: true }))
    }
  }

  const hanldeRemoveAddress = async () => {
    const addressRes = await deleteAddress(address.id)
    if (addressRes?.status === 200) {
      toast.success('Address removed successfully')
      dispatch(removeDeliveryAddress(address))
    } else {
      toast.error(addressRes?.message)
    }
  }

  const toggleEditAddress = () => setIsEditing((prev) => !prev)

  return (
    <>
      <label
        htmlFor={address?.id}
        className="flex px-6 py-4 gap-5 bg-white border rounded-10"
      >
        {showRadio && (
          <div className="flex py-4">
            {isSelected ? (
              <div className="h-5 w-5 rounded-full border border-punchy-neon flex items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-punchy-neon"></div>
              </div>
            ) : (
              <div className="h-5 w-5 rounded-full border border-gray-light peer-checked:border-punchy-neon"></div>
            )}
          </div>
        )}
        <div className="flex flex-col gap-6 flex-grow">
          <div className="flex flex-col gap-1.5 font-cera-pro font-medium">
            <div>{address.line1}</div>
            <div>{address.line2}</div>
          </div>
          <div className="flex items-center justify-between text-13 font-medium">
            <div className="flex gap-4">
              <button
                className="border-b capitalize"
                onClick={toggleEditAddress}
              >
                edit
              </button>
              <button
                className="border-b capitalize"
                onClick={hanldeRemoveAddress}
              >
                Remove
              </button>
              {!address?.isDefault && (
                <button
                  className="border-b capitalize"
                  onClick={hanldeMakeDefault}
                >
                  Make it default
                </button>
              )}
            </div>
            {address?.isDefault && (
              <p className="text-gray-mid">Default Address</p>
            )}
          </div>
        </div>
      </label>
      <EditAddressModal
        {...{ isOpen: isEditing, setIsOpen: setIsEditing, address }}
      />
    </>
  )
}

export default AddressCard

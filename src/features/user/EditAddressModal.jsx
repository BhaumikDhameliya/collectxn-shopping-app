import React from 'react'
import { useDispatch } from 'react-redux'

import { useForm } from 'react-hook-form'
import { Dialog } from '@headlessui/react'

import { ReactComponent as CloseRoundedWhiteSVG } from '../../assets/svg/close_rounded_white.svg'

import TextInput from '../../components/Input/TextInput'

import { addressSchemaResolver } from './AddAddressModal'

import { updateAddress } from '../../api/addresses.api'
import { updateDeliveryAddress } from './userSlice'
import PopButton from '../../components/buttons/PopButton'
import { toast } from 'react-toastify'

const EditAddressModal = (props) => {
  const { isOpen, setIsOpen, address } = props

  const dispatch = useDispatch()

  const {
    formState: { errors },
    handleSubmit,
    register,
    // watch,
  } = useForm({
    defaultValues: { ...address },
    resolver: addressSchemaResolver,
  })

  const close = () => setIsOpen(false)

  const onSubmit = async (data) => {
    close()
    const addressRes = await updateAddress(address.id, data)
    if (addressRes?.status === 200) {
      toast.success('Address updated successfully')
      dispatch(updateDeliveryAddress(data))
    }
  }

  return (
    <Dialog open={isOpen} onClose={close} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-center justify-center p-4 rounded-xl">
          <Dialog.Panel className="bg-white rounded-xl">
            <form
              className="flex flex-col items-center p-8 gap-10 rounded-xl max-w-xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex items-center justify-between gap-6 w-full">
                <div className="font-bold text-2xl">Shipping Address</div>
                <button onClick={close}>
                  <CloseRoundedWhiteSVG />
                </button>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <TextInput
                  labelText="Address line 1"
                  name="line1"
                  {...{ register, errors }}
                />
                <TextInput
                  labelText="Address line 2"
                  name="line2"
                  {...{ register, errors }}
                />
                <div className="flex gap-6">
                  <TextInput
                    labelText="Pincode"
                    name="pinCode"
                    {...{ register, errors }}
                  />
                  <TextInput
                    labelText="City"
                    name="city"
                    {...{ register, errors }}
                  />
                </div>
                <div className="flex gap-6">
                  <TextInput
                    labelText="State"
                    labelClasses=""
                    name="state"
                    {...{ register, errors }}
                  />
                  <TextInput
                    labelText="Country"
                    name="country"
                    {...{ register, errors }}
                  />
                </div>
                <div className="font-medium">
                  <input
                    type="checkbox"
                    name="isDefault"
                    id="isDefault"
                    {...register('isDefault')}
                    className="accent-black-mate"
                  />
                  <label htmlFor="isDefault"> make default</label>
                </div>
              </div>
              <div className="flex w-full">
                <PopButton btnClasses="bg-black-mate">Edit Address</PopButton>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default EditAddressModal

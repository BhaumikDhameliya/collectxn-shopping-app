import React from 'react'
import { useDispatch } from 'react-redux'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { ReactComponent as CloseRoundedWhiteSVG } from '../../assets/svg/close_rounded_white.svg'

import PopButton from '../../components/buttons/PopButton'
import TextInput from '../../components/Input/TextInput'

import { createAddress } from '../../api/addresses.api'
import { addDeliveryAddress } from './userSlice'

export const addressSchemaResolver = yupResolver(
  yup.object().shape({
    line1: yup.string().required('Please enter Address line 1'),
    line2: yup.string(),
    city: yup.string().required('Please enter City'),
    state: yup.string().required('Please enter State'),
    country: yup.string().required('Please enter Country'),
    pinCode: yup.string().required('Please enter PinCode'),
    isDefault: yup.boolean(),
  }),
)

const AddAddress = (props) => {
  const { toggleShowAddress } = props

  const dispatch = useDispatch()

  const {
    formState: { errors },
    handleSubmit,
    register,
    // watch,
  } = useForm({
    defaultValues: { isDefault: true },
    resolver: addressSchemaResolver,
  })
  const onSubmit = async (data) => {
    const addressRes = await createAddress(data)
    const addressData = addressRes?.data?.address
    if (addressData) {
      dispatch(addDeliveryAddress(addressData))
    }
  }

  // console.log(watch())

  return (
    <form
      className="flex flex-col items-center p-8 gap-10 rounded-xl border max-w-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center justify-between gap-6 w-full">
        <div className="font-bold text-2xl">Shipping Address</div>
        <button onClick={toggleShowAddress}>
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
          <TextInput labelText="City" name="city" {...{ register, errors }} />
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
      </div>
      <div className="flex w-full">
        <PopButton btnClasses="bg-black-mate">Add</PopButton>
      </div>
    </form>
  )
}

export default AddAddress

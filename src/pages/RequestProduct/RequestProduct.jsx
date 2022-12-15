import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { ReactComponent as CloseRoundedWhiteSVG } from '../../assets/svg/close_rounded_white.svg'
import { ReactComponent as VerifiedRoundedSVG } from '../../assets/svg/verified_rounded.svg'

import PopButton from '../../components/buttons/PopButton'
import SelectInput from '../../components/Input/SelectInput'
import TextInput from '../../components/Input/TextInput'
import RequestProductPageBanner from './RequestProductPageBanner'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { createProductRequest } from '../../api/products.api'

export const requestProductSchemaResolver = yupResolver(
  yup.object().shape({
    userName: yup.string().required('Please enter your name'),
    CategoryId: yup.number().required('Please select product category'),
    brand: yup.string().required('Please enter brand name'),
    productName: yup.string().required('Please enter product name'),
    size: yup.string().required('Please enter product size'),
    color: yup.string().required('Please enter product color'),
    mobile: yup.string().required('Please enter phone number'),
  }),
)

const RequestProduct = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  const {
    formState: { errors },
    handleSubmit,
    register,
    // watch,
  } = useForm({
    defaultValues: { isDefault: true },
    resolver: requestProductSchemaResolver,
  })

  const onSubmit = async (data) => {
    goBack()
    debugger
    const addressRes = await createProductRequest(data)
    const addressData = addressRes?.data?.address
    if (addressData) {
      toast.success('Product request sent')
    }
  }

  return (
    <div className="flex flex-row rounded-xl min-h-screen">
      <div className="hidden laptop:flex max-w-[45%]">
        <RequestProductPageBanner />
      </div>
      <form
        className="flex flex-col items-center px-8 py-6 gap-8 rounded-xl flex-grow"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center gap-6 justify-between w-full">
          <div className="font-bold text-2xl">Request Product</div>
          <button type="button" onClick={goBack}>
            <CloseRoundedWhiteSVG />
          </button>
        </div>
        <div className="w-full flex flex-col gap-6 font-cera-pro font-medium">
          <TextInput
            labelText="Your Name*"
            name="userName"
            {...{ register, errors }}
          />
          <SelectInput
            labelText="Product Catagory*"
            options={[
              { value: 'sneakers', name: 'Sneakers' },
              { value: 'apparels', name: 'Apparels' },
            ]}
            name="CategoryId"
            {...{ register, errors }}
          />
          <TextInput
            labelText="Brand Name"
            name="brand"
            {...{ register, errors }}
          />
          <TextInput
            labelText="Product Name*"
            name="productName"
            {...{ register, errors }}
          />
          <TextInput
            labelText="Product Color*"
            name="color"
            {...{ register, errors }}
          />
          <TextInput
            labelText="Product Size*"
            name="size"
            {...{ register, errors }}
          >
            <p className="font-cera-pro text-13 text-gray-dark mt-1.5">
              Please mention a UK size in case of sneakers.
            </p>
          </TextInput>
        </div>
        <div className="flex flex-col p-6 gap-6 bg-gray-extra-light border rounded-[10px] w-full">
          <div className="font-cera-pro font-medium text-13 text-gray-dark ">
            It will help us to reach you over the call if needed.
          </div>
          <div className="flex flex-col gap-4 tablet:flex-row tablet:items-end">
            <div className="flex flex-col gap-1.5 flex-grow">
              <TextInput
                labelText="Phone Number*"
                labelClasses="font-cera-pro font-medium"
                name="mobile"
                {...{ register, errors }}
              ></TextInput>
            </div>
            <div className="w-max">
              <PopButton btnClasses="text-xl bg-black-mate" type="button">
                Verify
              </PopButton>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-6">
              <p className="font-cera-pro font-medium">
                Enter Verification OTP that sent on XXXXXX865
              </p>
              <button
                type="button"
                className="text-pink border-b border-pink font-medium text-13"
              >
                Edit
              </button>
            </div>
            <div className="flex flex-row items-start gap-4">
              <div className="flex-shrink">
                <input
                  type="text"
                  className="flex items-center justify-center p-3 tablet:px-6 tablet:py-3 border rounded-3xl border-black-mate w-full text-center"
                />
              </div>
              <div className="flex-shrink">
                <input
                  type="text"
                  className="flex items-center justify-center p-3 tablet:px-6 tablet:py-3 border rounded-3xl border-black-mate w-full text-center"
                />
              </div>
              <div className="flex-shrink">
                <input
                  type="text"
                  className="flex items-center justify-center p-3 tablet:px-6 tablet:py-3 border rounded-3xl border-black-mate w-full text-center"
                />
              </div>
              <div className="flex-shrink">
                <input
                  type="text"
                  className="flex items-center justify-center p-3 tablet:px-6 tablet:py-3 border rounded-3xl border-black-mate w-full text-center"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <p className="font-medium text-xl">Number verified</p>
              <VerifiedRoundedSVG />
            </div>
          </div>
        </div>
        <PopButton btnClasses="text-xl">Submit</PopButton>
      </form>
    </div>
  )
}

export default RequestProduct

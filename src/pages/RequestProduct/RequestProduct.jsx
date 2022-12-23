import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import { isValidPhoneNumber } from 'react-phone-number-input'

import { ReactComponent as CloseRoundedWhiteSVG } from '../../assets/svg/close_rounded_white.svg'
import { ReactComponent as VerifiedRoundedSVG } from '../../assets/svg/verified_rounded.svg'

import PopButton from '../../components/buttons/PopButton'
import SelectInput from '../../components/Input/SelectInput'
import TextInput from '../../components/Input/TextInput'
import RequestProductPageBanner from './RequestProductPageBanner'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { createProductRequest } from '../../api/products.api'
import VerifyMobile from './VerifyMobile'

export const requestProductSchemaResolver = yupResolver(
  yup.object().shape({
    userName: yup.string().required('Please enter your name'),
    CategoryId: yup.string().required('Please select product category'),
    brand: yup.string().required('Please enter brand name'),
    productName: yup.string().required('Please enter product name'),
    size: yup.string().required('Please enter product size'),
    color: yup.string().required('Please enter product color'),
    // mobile: yup
    //   .string()
    //   .required('Please enter Mobile number')
    //   .test('Mobile Validation', 'Please enter valid Mobile Number', (value) =>
    //     value ? isValidPhoneNumber(value) : false,
    //   )
    //   .nullable(),
  }),
)

const RequestProduct = () => {
  const navigate = useNavigate()

  const categories = useSelector((state) => state.category.categories)
  const userProfile = useSelector((state) => state.user.profile)

  const [isAllowed, setIsAllowed] = useState(false)

  const goBack = () => navigate(-1)

  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    // watch,
  } = useForm({
    defaultValues: {},
    resolver: requestProductSchemaResolver,
  })

  console.log('values-----', errors)

  const onSubmit = async (data) => {
    if (!isAllowed) {
      toast.error('Please verify mobile number')
      return
    }
    const requestRes = await createProductRequest(data)
    const requestData = requestRes?.data?.request
    if (requestData) {
      navigate('/')
      toast.success('Product request sent')
    }
  }

  useEffect(() => {
    if (Object.keys(userProfile || {})?.length) {
      setIsAllowed(true)
      setValue('userName', userProfile?.name || '')
    }
  }, [setValue, userProfile])

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
            options={Object.entries(categories || {})?.map(([catId, cat]) => {
              return { value: catId, name: cat?.name }
            })}
            placeholder="Select Category"
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
        <VerifyMobile
          onSuccess={(updatedMobile) => {
            setValue('mobile', updatedMobile)
            setIsAllowed(true)
          }}
        />
        <PopButton btnClasses="text-xl bg-black-mate" type="submit">
          Submit
        </PopButton>
      </form>
    </div>
  )
}

export default RequestProduct

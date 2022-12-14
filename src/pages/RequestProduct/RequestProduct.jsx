import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as CloseRoundedWhiteSVG } from '../../assets/svg/close_rounded_white.svg'
import { ReactComponent as VerifiedRoundedSVG } from '../../assets/svg/verified_rounded.svg'

import PopButton from '../../components/buttons/PopButton'
import SelectInput from '../../components/Input/SelectInput'
import TextInput from '../../components/Input/TextInput'
import RequestProductPageBanner from './RequestProductPageBanner'

const RequestProduct = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-row rounded-xl min-h-screen">
      <div className="hidden laptop:flex max-w-[45%]">
        <RequestProductPageBanner />
      </div>
      <div className="flex flex-col items-center px-8 py-6 gap-8 rounded-xl flex-grow">
        <div className="flex items-center gap-6 justify-between w-full">
          <div className="font-bold text-2xl">Request Product</div>
          <button onClick={() => navigate(-1)}>
            <CloseRoundedWhiteSVG />
          </button>
        </div>
        <div className="w-full flex flex-col gap-6 font-cera-pro font-medium">
          <TextInput labelText="Your Name*" />
          <SelectInput
            labelText="Product Catagory*"
            options={[
              { value: 'sneakers', name: 'Sneakers' },
              { value: 'apparels', name: 'Apparels' },
            ]}
          />
          <TextInput labelText="Brand Name" />
          <TextInput labelText="Product Name*" />
          <SelectInput
            labelText="Product Size*"
            placeholder="select size"
            options={[
              { value: 'sneakers', name: 'Sneakers' },
              { value: 'apparels', name: 'Apparels' },
            ]}
            hint={
              <p className="font-cera-pro text-13 text-gray-dark">
                Please mention a UK size in case of sneakers.
              </p>
            }
          />
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
              ></TextInput>
            </div>
            <div className="w-max">
              <PopButton btnClasses="text-xl">Verify</PopButton>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-6">
              <p className="font-cera-pro font-medium">
                Enter Verification OTP that sent on XXXXXX865
              </p>
              <button className="text-pink border-b border-pink font-medium text-13">
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
      </div>
    </div>
  )
}

export default RequestProduct

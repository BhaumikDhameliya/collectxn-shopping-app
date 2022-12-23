import React, { useState } from 'react'

import { isValidPhoneNumber } from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input'

import * as yup from 'yup'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../../utils/firebase/firebase.utils'

import { ReactComponent as VerifiedRoundedSVG } from '../../assets/svg/verified_rounded.svg'

import PopButton from '../../components/buttons/PopButton'
import OtpInput from '../../features/user/OtpInput'

const MobileSchemaResolver = yup.object().shape({
  mobile: yup
    .string()
    .required('Please enter Mobile number')
    .test('Mobile Validation', 'Please enter valid Contact Number', (value) =>
      value ? isValidPhoneNumber(value) : false,
    )
    .nullable(),
})

const VerifyMobile = (props) => {
  const { onSuccess } = props

  const [mobile, setMobile] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [final, setfinal] = useState('')
  const [isVerified, setIsVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  console.log('isLoading', isLoading)

  const handleMobileSubmit = async () => {
    setError('')
    MobileSchemaResolver.validate({ mobile }).catch((error) => {
      setError(error.message)
      return
    })
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (response) => {},
      },
      auth,
    )

    const appVerifier = window.recaptchaVerifier

    signInWithPhoneNumber(auth, mobile, appVerifier)
      .then((confirmationResult) => {
        setfinal(confirmationResult)
        console.log('code sent')
        setOtpSent(true)
        window.confirmationResult = confirmationResult
      })
      .catch((error) => {
        console.log('sms not sent -----', error)
      })
  }

  const handleOtpSubmit = async () => {
    try {
      setError('')
      const result = await final.confirm(otp)
      const firebase_token = result?.user?.accessToken
      if (firebase_token) {
        onSuccess(mobile)
        setIsVerified(true)
      }
    } catch (error) {
      debugger
      let errorCode = error?.code
      if (errorCode) {
        errorCode = errorCode.replace('auth/', '').replaceAll('-', ' ')
        setError(errorCode)
      }
    }
  }

  if (isVerified) {
    return (
      <div className="flex flex-col p-6 gap-6 bg-gray-extra-light border rounded-[10px] w-full">
        <div className="flex items-center justify-center gap-3">
          <p className="font-medium text-xl">Number verified</p>
          <VerifiedRoundedSVG />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col p-6 gap-6 bg-gray-extra-light border rounded-[10px] w-full">
      <div className="font-cera-pro font-medium text-13 text-gray-dark ">
        It will help us to reach you over the call if needed.
      </div>
      <div className="flex flex-col tablet:items-end gap-4 tablet:flex-row">
        {otpSent ? (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-6">
              <p className="font-cera-pro font-medium">
                Enter Verification OTP that sent on {mobile}
              </p>
              <button
                type="button"
                className="text-pink border-b border-pink font-medium text-13"
                onClick={() => {
                  setOtpSent(false)
                  setError('')
                }}
              >
                Edit
              </button>
            </div>
            <div className="flex flex-row items-start gap-4">
              <OtpInput
                value={otp}
                valueLength={6}
                onChange={setOtp}
                className="flex items-center justify-center px-6 py-3 border rounded-3xl border-black-mate w-full text-center"
              />
            </div>
            {error && (
              <div className="px-4 py-[6px] text-[13px] text-error">
                <p>{error}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-1.5 flex-grow">
            <div className="flex flex-col w-full">
              <label htmlFor="mobile" className="font-medium">
                Enter new number
              </label>
              <PhoneInput
                international
                defaultCountry="IN"
                id="mobile"
                name="mobile"
                className="py-3 px-6 border rounded-3xl border-black-mate bg-white"
                value={mobile}
                onChange={setMobile}
                form=""
              />

              {error && (
                <div className="px-4 py-[6px] text-[13px] text-error">
                  <p>{error}</p>
                </div>
              )}
            </div>
          </div>
        )}
        <div
          className={`w-max h-full flex ${
            error ? 'items-center' : 'items-end'
          }`}
        >
          <div id="recaptcha-container"></div>
          <PopButton
            btnClasses="text-xl bg-black-mate"
            type="button"
            onClick={() => {
              if (otpSent) {
                handleOtpSubmit()
              } else {
                handleMobileSubmit()
              }
            }}
          >
            {otpSent ? 'Verify' : 'Send OTP'}
          </PopButton>
        </div>
      </div>
    </div>
  )
}

export default VerifyMobile

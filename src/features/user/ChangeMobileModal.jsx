import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Dialog } from '@headlessui/react'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import { isValidPhoneNumber } from 'react-phone-number-input'

import { ReactComponent as CloseRoundedWhiteSVG } from '../../assets/svg/close_rounded_white.svg'
import { ReactComponent as EmailLogo } from '../../assets/svg/logo_email.svg'

import PopButton from '../../components/buttons/PopButton'
import OtpInput from './OtpInput'
import { auth } from '../../utils/firebase/firebase.utils'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { updateMobile } from '../../api/user.api'

export const changeMobileSchemaResolver = yupResolver(
  yup.object().shape({
    mobile: yup
      .string()
      .required('Please enter Mobile number')
      .test('Mobile Validation', 'Please enter valid Contact Number', (value) =>
        value ? isValidPhoneNumber(value) : false,
      )
      .nullable(),
  }),
)

const ChangeMobileModal = (props) => {
  const { isOpen, setIsOpen, onSuccess } = props

  //   const navigate = useNavigate()

  const [mobile, setMobile] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [final, setfinal] = useState('')

  const {
    control,
    formState: { errors },
    handleSubmit,
    // watch,
    reset,
  } = useForm({
    defaultValues: {},
    resolver: changeMobileSchemaResolver,
  })

  const close = () => {
    setIsOpen(false)
    setOtpSent(false)
    setOtp('')
    setError('')
  }

  const onSubmit = async (data) => {
    setMobile(data?.mobile)
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (response) => {},
      },
      auth,
    )

    const appVerifier = window.recaptchaVerifier

    signInWithPhoneNumber(auth, data.mobile, appVerifier)
      .then((confirmationResult) => {
        setfinal(confirmationResult)
        console.log('code sent')
        setOtpSent(true)
        reset()
        window.confirmationResult = confirmationResult
      })
      .catch((error) => {
        console.log('sms not sent -----', error)
      })
  }

  const handleOtpSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await final.confirm(otp)
      const firebase_token = result?.user?.accessToken
      const response = await updateMobile({ firebase_token })
      if (response?.isUpdated) {
        onSuccess(mobile)
        close()
      }
    } catch (error) {
      let errorCode = error?.code
      if (errorCode) {
        errorCode = errorCode.replace('auth/', '').replaceAll('-', ' ')
        setError(errorCode)
      }
    }
  }

  return (
    <Dialog open={isOpen} onClose={close} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-center justify-center p-4 rounded-xl min-h-full">
          <Dialog.Panel className="bg-white rounded-xl">
            <div className="flex flex-col items-center p-8 gap-10 rounded-xl border max-w-xl">
              <div className="flex items-center justify-between gap-6 w-full">
                <div className="font-bold text-2xl">Change Mobile Number</div>
                <button onClick={close}>
                  <CloseRoundedWhiteSVG />
                </button>
              </div>
              {otpSent ? (
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-start gap-10 w-full">
                    <div className="flex items-center justify-center w-full">
                      <EmailLogo />
                    </div>
                    <div className="text-center flex flex-col w-full">
                      <p className="font-bold text-[31px]">OTP Verification</p>
                      <p className="font-cera-pro text-base">
                        We sent code to your mobile number {mobile}
                      </p>
                    </div>
                    <form onSubmit={handleOtpSubmit}>
                      <div className="flex flex-col items-center gap-8 w-full">
                        <div className="flex flex-col gap-3 w-full">
                          <div className="flex flex-row justify-between gap-4">
                            <OtpInput
                              value={otp}
                              valueLength={6}
                              onChange={setOtp}
                              className="flex items-center justify-center px-6 py-3 border rounded-3xl border-black-mate w-full text-center"
                            />
                          </div>
                          <p className="font-cera-pro text-base text-error text-center">
                            {error && error}
                          </p>
                        </div>
                        <PopButton
                          disabled={otp?.trim('')?.length !== 6}
                          btnClasses="bg-black-mate"
                        >
                          Verify
                        </PopButton>
                        <p className="font-cera-pro font-medium text-xl text-center">
                          Resend in <span className="text-pink">15 sec</span>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col" style={{ minWidth: '500px' }}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col w-full gap-8">
                      <div className="flex flex-col w-full">
                        <label htmlFor="mobile" className="font-medium">
                          Enter new number
                        </label>
                        <PhoneInputWithCountry
                          international
                          defaultCountry="IN"
                          id="mobile"
                          name="mobile"
                          control={control}
                          className="py-3 px-6 border rounded-3xl border-black-mate"
                        />

                        {errors && errors['mobile'] && (
                          <div className="px-4 py-[6px] text-[13px] text-error">
                            <p>{errors['mobile']['message']}</p>
                          </div>
                        )}
                      </div>
                      <div id="recaptcha-container"></div>
                      <PopButton btnClasses="bg-black-mate">Submit</PopButton>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default ChangeMobileModal

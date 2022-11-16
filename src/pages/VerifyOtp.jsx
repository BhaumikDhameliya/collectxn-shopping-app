import React from 'react'
import { useNavigate } from 'react-router-dom'

import img_signup from '../assets/img/img_signup.png'
import logo_cxn from '../assets/img/logo_cxn.png'

import { ReactComponent as RightArrow } from '../assets/svg/svg_arrow_right.svg'
import { ReactComponent as EmailLogo } from '../assets/svg/logo_email.svg'
import PopButton from '../components/buttons/PopButton'

const VerifyOTP = () => {
  const navigate = useNavigate()
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col w-full laptop:w-1/2">
        <div className="h-20 flex items-center px-8">
          <div className="flex items-center gap-8">
            <button onClick={() => navigate(-1)}>
              <RightArrow />
            </button>
            <img src={logo_cxn} alt="cxn" />
          </div>
        </div>
        <div className="px-1/10 flex items-center justify-center h-full">
          <div className="flex flex-col items-start gap-10 w-full">
            <div>
              <EmailLogo />
            </div>
            <div>
              <p className="font-bold text-[31px]">OTP Verification</p>
              <p className="font-cera-pro text-base">
                We sent code to your email *****@gmail.com, please enter the
                same here to login.
              </p>
            </div>
            <div className="flex flex-col items-center gap-8 w-full">
              <div className="flex flex-col gap-3">
                <div className="flex flex-row items-start gap-4">
                  <div className="flex-shrink">
                    <input
                      type="text"
                      className="flex items-center justify-center px-6 py-3 border rounded-3xl border-black-mate w-full"
                    />
                  </div>
                  <div className="flex-shrink">
                    <input
                      type="text"
                      className="flex items-center justify-center px-6 py-3 border rounded-3xl border-black-mate w-full"
                    />
                  </div>
                  <div className="flex-shrink">
                    <input
                      type="text"
                      className="flex items-center justify-center px-6 py-3 border rounded-3xl border-black-mate w-full"
                    />
                  </div>
                  <div className="flex-shrink">
                    <input
                      type="text"
                      className="flex items-center justify-center px-6 py-3 border rounded-3xl border-black-mate w-full"
                    />
                  </div>
                </div>
                <p className="font-cera-pro text-base text-error text-center">
                  Invalid OTP! Please try again.
                </p>
              </div>
              <PopButton disabled>Verify</PopButton>
              <p className="font-cera-pro font-medium text-xl text-center">
                Resend in <span className="text-pink">15 sec</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden laptop:block laptop:w-1/2">
        <img src={img_signup} alt="sign up" className="h-full w-full" />
      </div>
    </div>
  )
}

export default VerifyOTP

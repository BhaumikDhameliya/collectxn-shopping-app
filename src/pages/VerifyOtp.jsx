import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import img_signup from '../assets/img/img_signup.png'
import logo_cxn from '../assets/img/logo_cxn.png'

import { ReactComponent as RightArrow } from '../assets/svg/svg_arrow_right.svg'
import { ReactComponent as EmailLogo } from '../assets/svg/logo_email.svg'
import PopButton from '../components/buttons/PopButton'
import OtpInput from '../features/user/OtpInput'
import { otpVerification } from '../api/auth.api'

const VerifyOTP = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email
  const token = location.state?.token
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')

  const handleOtpSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await otpVerification({ OTP: otp })
      if (res?.status === 200) {
        navigate('/')
      } else {
        if (res?.message) {
          setError(res.message)
        }
      }
    } catch (error) {
  console.log(error)
    }
  }

  useEffect(() => {
    let errorTimer
    if (error) {
      errorTimer = setTimeout(() => {
        setError('')
      }, [5000])
    }

    return () => {
      clearTimeout(errorTimer)
    }
  }, [error])

  useEffect(() => {
    if (location.state === null) {
      navigate('/auth/login')
    }
  }, [location.state, navigate])

  console.log('token-----', token)

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
                We sent code to your email {email}, please enter the same here
                to login.
              </p>
            </div>
            <form onSubmit={handleOtpSubmit}>
              <div className="flex flex-col items-center gap-8 w-full">
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex flex-row justify-between gap-4">
                    <OtpInput
                      value={otp}
                      valueLength={4}
                      onChange={setOtp}
                      className="flex items-center justify-center px-6 py-3 border rounded-3xl border-black-mate w-full"
                    />
                  </div>
                  <p className="font-cera-pro text-base text-error text-center">
                    {error && error}
                  </p>
                </div>
                <PopButton
                  disabled={otp?.trim('')?.length !== 4}
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
      </div>
      <div className="hidden laptop:block laptop:w-1/2">
        <img src={img_signup} alt="sign up" className="h-full w-full" />
      </div>
    </div>
  )
}

export default VerifyOTP

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import img_signup from '../assets/img/img_signup.png'
import logo_cxn from '../assets/img/logo_cxn.png'

import { ReactComponent as RightArrow } from '../assets/svg/svg_arrow_right.svg'

import TextInput from '../components/Input/TextInput'
import PopButton from '../components/buttons/PopButton'
import GoogleButton from '../components/buttons/GoogleButton'
import FacebookButton from '../components/buttons/FacebookButton'

const Signup = () => {
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
          <div>
            <div>
              <p className="font-bold text-3xl">Sign up</p>
            </div>
            <div>
              <p className="font-cera-pro">
                Join our community or{' '}
                <span className="font-space-grotesk text-pink underline">
                  <Link to="/auth/login">login</Link>
                </span>
              </p>
            </div>
            <div className="pb-10 border-b flex items-center justify-between border-gray-light gap-3 mt-8 flex-wrap">
              <GoogleButton text="Signup with Google" />
              <FacebookButton text="Signup with Facebook" />
            </div>
            <div className="flex flex-col items-start">
              <div className="mt-6">
                <TextInput labelText="Full Name" />
              </div>
              <div className="mt-6">
                <TextInput labelText="Email Address" />
              </div>
              <div className="mt-8 w-full">
                <PopButton onClick={() => navigate('/auth/verify-otp')}>
                  Sign up
                </PopButton>
              </div>
            </div>
            <div className="mt-8">
              <p className="font-cera-pro font-medium text-black-mate text-base text-center">
                By creating an account, you agree to{' '}
                <span className="text-blue underline">
                  <Link to="/">our Terms</Link>
                </span>{' '}
                and have read and acknowledge the Global{' '}
                <span className="text-blue underline">
                  <Link to="/">Privacy Statement</Link>
                </span>
                .
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

export default Signup

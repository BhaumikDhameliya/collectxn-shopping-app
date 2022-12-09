import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import img_log_in from '../assets/img/img_log_in.png'
import logo_cxn from '../assets/img/logo_cxn.png'

import { ReactComponent as RightArrow } from '../assets/svg/svg_arrow_right.svg'

import TextInput from '../components/Input/TextInput'
import PopButton from '../components/buttons/PopButton'
import GoogleButton from '../components/buttons/GoogleButton'
import FacebookButton from '../components/buttons/FacebookButton'
import { emailLogin } from '../api/auth.api'
import { toast } from 'react-toastify'

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await emailLogin({ email })
      if (res?.status === 200) {
        navigate('/auth/verify-otp', { state: { ...res, email } })
      } else {
        if (res?.message) {
          toast.error(res.message)
        }
      }
    } catch (error) {
      alert(error)
    }
  }

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
              <p className="font-bold text-3xl">Log In</p>
            </div>
            <div>
              <p className="font-cera-pro">
                Don't have Collectxn account?{' '}
                <span className="font-space-grotesk text-pink underline">
                  <Link to="/auth/signup">Create an account</Link>
                </span>
              </p>
            </div>
            <div className="pb-10 border-b flex items-center justify-between border-gray-light gap-3 mt-8 flex-wrap">
              <GoogleButton text="Log in with Google" type="login" />
              <FacebookButton text="Log in with Facebook" type="login" />
            </div>
            <form onSubmit={handleEmailLogin}>
              <div className="flex flex-col items-start">
                <div className="mt-6 w-full">
                  <TextInput
                    labelText="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-8 w-full">
                  <PopButton btnClasses="bg-black-mate">Log In</PopButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden laptop:block laptop:w-1/2">
        <img src={img_log_in} alt="Log in" className="h-full w-full" />
      </div>
    </div>
  )
}

export default Login

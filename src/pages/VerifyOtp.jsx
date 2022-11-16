import React from 'react'
import { useNavigate } from 'react-router-dom'

import img_signup from '../assets/img/img_signup.png'
import logo_cxn from '../assets/img/logo_cxn.png'

import { ReactComponent as RightArrow } from '../assets/svg/svg_arrow_right.svg'

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
          <div></div>
        </div>
      </div>
      <div className="hidden laptop:block laptop:w-1/2">
        <img src={img_signup} alt="sign up" className="h-full w-full" />
      </div>
    </div>
  )
}

export default VerifyOTP

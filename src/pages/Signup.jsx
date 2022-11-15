import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import img_signup from '../assets/img/img_signup.png'
import logo_cxn from '../assets/img/logo_cxn.png'

import { ReactComponent as RightArrow } from '../assets/svg/svg_arrow_right.svg'
import { ReactComponent as LogoGoogle } from '../assets/svg/logo_google.svg'
import { ReactComponent as LogoFacebook } from '../assets/svg/logo_facebook.svg'

const Signup = () => {
  const navigate = useNavigate()
  return (
    <div className="flex h-screen">
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
                  <Link to="/login">login</Link>
                </span>
              </p>
            </div>
            <div className="pb-10 border-b flex items-center justify-between border-gray-light gap-3 mt-8">
              <button className="flex flex-row justify-center items-center px-4 py-3 gap-[10px] h-12 border border-black rounded-[36px] w-1/2 hover:shadow-btn">
                <LogoGoogle />
                <span>Signup with Google</span>
              </button>
              <button className="flex flex-row justify-center items-center px-4 py-3 gap-[10px] h-12 border border-black rounded-3xl bg-[#1877F2] text-white w-1/2 hover:shadow-btn">
                <LogoFacebook />
                <span>Signup with Facebook</span>
              </button>
            </div>
            <div>
              <div>
                <label htmlFor="">Full Name</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Email Address</label>
                <input type="text" />
              </div>
              <button>Sign up</button>
            </div>
            <div>
              <p>
                By creating an account, you agree to our Terms and have read and
                acknowledge the Global Privacy Statement.
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

import React from 'react'
import { useNavigate } from 'react-router-dom'

import { SocialAuth } from '../../api/auth.api'

import { ReactComponent as LogoFacebook } from '../../assets/svg/logo_facebook.svg'
import { signInWithFacebook } from '../../utils/firebase/firebase.utils'

const FacebookButton = ({ text = 'Facebook', type }) => {
  const navigate = useNavigate()
  const logFacebookUser = async () => {
    const response = await signInWithFacebook()
    console.log('response----', response)
    const firebase_token = response?.user?.accessToken
    if (firebase_token) {
      const response = await SocialAuth({ firebase_token })
      const token = response?.data?.token
      if (token) {
        navigate('/')
      }
    }
  }

  return (
    <button
      className="flex flex-row justify-center items-center px-4 py-3 gap-[10px] h-12 border border-black rounded-3xl bg-[#1877F2] text-white hover:shadow-btn flex-grow"
      onClick={logFacebookUser}
    >
      <LogoFacebook />
      <span>{text}</span>
    </button>
  )
}

export default FacebookButton

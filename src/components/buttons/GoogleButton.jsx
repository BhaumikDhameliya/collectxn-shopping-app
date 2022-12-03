import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as LogoGoogle } from '../../assets/svg/logo_google.svg'

import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import { SocialAuth } from '../../api/auth.api'

const GoogleButton = ({ text = 'Google', type }) => {
  const navigate = useNavigate()
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
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
      className="flex flex-row justify-center items-center px-4 py-3 gap-[10px] h-12 border border-black rounded-[36px] hover:shadow-btn flex-grow"
      onClick={logGoogleUser}
    >
      <LogoGoogle />
      <span>{text}</span>
    </button>
  )
}

export default GoogleButton

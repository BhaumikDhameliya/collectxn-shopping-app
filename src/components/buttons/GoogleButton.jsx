import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as LogoGoogle } from '../../assets/svg/logo_google.svg'

import {
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils'
import { SocialAuth } from '../../api/auth.api'
// import { GoogleAuthProvider } from 'firebase/auth'

const GoogleButton = ({ text = 'Google', type }) => {
  const navigate = useNavigate()
  const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup()
      // const response = await signInWithGoogleRedirect()
      console.log('response----', response)
      // const credential = GoogleAuthProvider.credentialFromResult(response)
      // const firebase_token = credential.accessToken
      const firebase_token = response?.user?.accessToken
      if (firebase_token) {
        const response = await SocialAuth({ firebase_token })
        const token = response?.data?.token
        if (token) {
          navigate('/')
        }
      }
    } catch (error) {
      console.log(error.message)
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

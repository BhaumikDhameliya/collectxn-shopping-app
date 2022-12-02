import React from 'react'
import axios from 'axios'

import { BASE_URL } from '../../config/constants'

import { ReactComponent as LogoGoogle } from '../../assets/svg/logo_google.svg'

import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const GoogleButton = ({ text = 'Google', type }) => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    const firebase_token = response?.user?.accessToken
    if (type === 'login' && firebase_token) {
      axios.post(`${BASE_URL}/users/login`, { firebase_token })
    }
    console.log('response----', response)
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

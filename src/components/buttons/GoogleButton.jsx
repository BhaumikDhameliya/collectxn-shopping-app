import { signInWithPopup } from 'firebase/auth'
import React from 'react'

import { ReactComponent as LogoGoogle } from '../../assets/svg/logo_google.svg'

import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const GoogleButton = ({ text = 'Google' }) => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
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

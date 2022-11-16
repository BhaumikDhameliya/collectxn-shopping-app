import React from 'react'

import { ReactComponent as LogoGoogle } from '../../assets/svg/logo_google.svg'

const GoogleButton = ({ text = 'Google' }) => {
  return (
    <button className="flex flex-row justify-center items-center px-4 py-3 gap-[10px] h-12 border border-black rounded-[36px] hover:shadow-btn flex-grow">
      <LogoGoogle />
      <span>{text}</span>
    </button>
  )
}

export default GoogleButton

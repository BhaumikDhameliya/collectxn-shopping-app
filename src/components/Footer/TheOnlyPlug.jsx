import React from 'react'

import the_only_gray_mid from '../../assets/svg/footer/the_only_gray_mid.svg'
import original_badge from '../../assets/svg/footer/original_badge.svg'

const TheOnlyPlug = () => {
  return (
    <div>
      <div>
        <img
          src={the_only_gray_mid}
          alt="the_only_gray_mid"
          className="w-full"
        />
      </div>
      <div className="flex items-center justify-center">
        <img src={original_badge} alt="original_badge" />
      </div>
    </div>
  )
}

export default TheOnlyPlug

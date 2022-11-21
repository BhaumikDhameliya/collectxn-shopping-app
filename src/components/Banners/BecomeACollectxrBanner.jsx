import React from 'react'

import become_a_collectxr_text from '../../assets/img/become_a_collectxr/become_a_collectxr_text.png'
import PopButton from '../buttons/PopButton'

const BecomeACollectxrBanner = () => {
  return (
    <div className="bg-purple bg-[url('/src/assets/img/chex_mask.png')] bg-no-repeat bg-center px-1/10 pt-1/10 pb-1/20">
      <div className="bg-[url('/src/assets/img/become_a_collectxr/become_a_collectxr_bg.png')] bg-center bg-no-repeat bg-contain">
        <div className="flex flex-col items-center justify-center">
          <div className="pt-1/20 pb-8">
            <img src={become_a_collectxr_text} alt="become_a_collectxr_text" />
          </div>
          <div>
            <PopButton type="outline">Join us</PopButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BecomeACollectxrBanner

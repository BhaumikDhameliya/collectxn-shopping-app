import React from 'react'

import { ReactComponent as StarSVG } from '../../assets/svg/star.svg'
import { ReactComponent as StarHalfSVG } from '../../assets/svg/star_half.svg'
import { ReactComponent as ArrowSVG } from '../../assets/svg/arrow.svg'

import review_user from '../../assets/img/review_user.png'

import PopButton from '../buttons/PopButton'

const UserReviewsBanner = () => {
  return (
    <div className="bg-[#F2F2EF] text-black p-8 laptop:px-1/20 py-1/10">
      <div className="flex justify-between">
        <div className="hidden laptop:flex items-center justify-center">
          <div className="p-2 border border-black-mate rounded-full bg-white">
            <ArrowSVG />
          </div>
        </div>
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-10 laptop:w-2/3">
            <div className="flex flex-col tablet:flex-row items-center gap-6">
              <div>
                <img src={review_user} alt="review_user" />
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-max">
                  <PopButton type="outline">Aman Singh</PopButton>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="flex gap-2">
                    <StarSVG />
                    <StarSVG />
                    <StarSVG />
                    <StarSVG />
                    <StarHalfSVG />
                  </div>
                  <p>4.5</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-cera-pro text-13 tablet:text-xl text-center">
                Earth is the third planet from the Sun and the only astronomical
                object known to harbor life. According to radiometric dating
                estimation and other evidence, Earth formed over 4.5 billion
                years ago.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-6 h-3 bg-punchy-neon border rounded-full shadow-black110"></div>
            <div className="w-3 h-3 bg-gray-light border rounded-full shadow-black110"></div>
            <div className="w-3 h-3 bg-gray-light border rounded-full shadow-black110"></div>
            <div className="w-3 h-3 bg-gray-light border rounded-full shadow-black110"></div>
          </div>
        </div>
        <div className="hidden laptop:flex items-center justify-center">
          <div className="p-2 border border-black-mate rounded-full bg-white rotate-180">
            <ArrowSVG />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserReviewsBanner

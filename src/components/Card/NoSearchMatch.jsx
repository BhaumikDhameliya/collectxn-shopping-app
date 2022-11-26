import React from 'react'

import { ReactComponent as NoMatchBagSVG } from '../../assets/svg/no_match_bag.svg'
import PopButton from '../buttons/PopButton'

const NoSearchMatch = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 gap-13 bg-white">
      <div className="flex flex-col items-center gap-3">
        <NoMatchBagSVG />
        <p className="font-bold text-gray-dark laptop:text-2xl">
          We couldn't find any matches!
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="font-bold text-10 tablet:text-xs laptop:text-base text-center">
          You can request product if you want
        </p>
        <PopButton btnClasses="bg-black-mate">Request Product</PopButton>
      </div>
    </div>
  )
}

export default NoSearchMatch

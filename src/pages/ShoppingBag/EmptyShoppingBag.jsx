import React from 'react'

import { ReactComponent as NoMatchBagSVG } from '../../assets/svg/no_match_bag.svg'

const EmptyShoppingBag = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 flex-grow">
      <div>
        <NoMatchBagSVG />
      </div>
      <p className="font-bold text-2xl">Shopping Bag is empty!</p>
    </div>
  )
}

export default EmptyShoppingBag

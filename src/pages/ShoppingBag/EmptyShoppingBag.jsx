import React from 'react'

import { ReactComponent as NoMatchBagSVG } from '../../assets/svg/no_match_bag.svg'

const EmptyShoppingBag = ({ onClick }) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 flex-grow"
      onClick={onClick}
    >
      <div>
        <NoMatchBagSVG />
      </div>
      <p className="font-bold text-2xl">Shopping Bag is empty!</p>
    </div>
  )
}

export default EmptyShoppingBag

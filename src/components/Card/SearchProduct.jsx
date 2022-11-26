import React from 'react'

import air_max from '../../assets/img/air_max_flyknit_racer_shoes.png'

import { ReactComponent as AddToCartSVG } from '../../assets/svg/add_to_cart_rounded_neon.svg'
import ViewAllArrow from '../../assets/SVGComponent/ViewAllArrow'
import PopButton from '../buttons/PopButton'

const SearchProduct = () => {
  return (
    <div className="flex items-center p-4 gap-2.5 bg-white border-t border-gray-light justify-between">
      <div className="flex gap-2.5 items-center">
        <img
          src={air_max}
          alt="air_max"
          className="w-16 rounded-md tablet:w-28"
        />
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col justify-center">
            <p className="font-bold tablet:text-2xl">Air Max Flyknit Racer</p>
            <p className="font-medium text-13 tablet:text-base text-gray-mid">
              Nike
            </p>
          </div>
          <p className="hidden tablet:block font-bold text-xl">₹ 12,699.00</p>
        </div>
      </div>
      <div>
        <div className="hidden tablet:block">
          <PopButton>
            <div className="text-black-mate flex items-center justify-center gap-2">
              <p>Add to Bag</p>
              <ViewAllArrow />
            </div>
          </PopButton>
        </div>
        <div className="tablet:hidden">
          <AddToCartSVG />
        </div>
      </div>
    </div>
  )
}

export default SearchProduct

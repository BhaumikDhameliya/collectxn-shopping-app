import React from 'react'

import air_max from '../../assets/img/air_max_flyknit_racer_shoes.png'

import { ReactComponent as Heart } from '../../assets/svg/heart.svg'
import ViewAllArrow from '../../assets/SVGComponent/ViewAllArrow'

const ProductCardScrollable = () => {
  return (
    <div className="flex flex-col border rounded-lg divide-y hover:shadow-card flex-none w-55 laptop:w-96">
      <div className="rounded-t-lg relative">
        <img src={air_max} alt="air_max" />
      </div>
      <div className="flex items-center justify-between p-2 laptop:py-3 laptop:px-4 gap-2">
        <div className="flex font-bold text-xs laptop:text-xl">
          Nike Air Max Flyknit Racer
        </div>
        <div className="hidden laptop:block">
          <Heart />
        </div>
      </div>
      <div className="flex flex-col laptop:flex-row items-center divide-y laptop:divide-y-0 laptop:divide-x text-xs laptop:text-xl">
        <div className="flex items-end p-2 laptop:py-3 laptop:px-4 gap-2 rounded-bl-lg whitespace-nowrap flex-grow w-full laptop:w-1/2">
          <p className="font-medium">₹ 14,995</p>
          <p className="text-10 laptop:text-sm line-through text-gray-dark">
            ₹ 14,995
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 p-2 laptop:py-3 laptop:px-4 rounded-br-lg w-full laptop:w-1/2">
          <div className="font-medium whitespace-nowrap">Add to Bag</div>
          <div>
            <ViewAllArrow />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardScrollable

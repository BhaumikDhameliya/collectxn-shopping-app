import React from 'react'

import air_max from '../../assets/img/air_max_flyknit_racer_shoes.png'

import { ReactComponent as Heart } from '../../assets/svg/heart.svg'
import ViewAllArrow from '../../assets/SVGComponent/ViewAllArrow'

const ProductCardScrollable = () => {
  return (
    <div className="flex flex-col border rounded-lg divide-y w-96 hover:shadow-card flex-none">
      <div className="rounded-t-lg">
        <img src={air_max} alt="air_max" />
      </div>
      <div className="flex items-center justify-between py-3 px-4 gap-2">
        <div className="flex font-bold text-xl ">
          Nike Air Max Flyknit Racer
        </div>
        <Heart />
      </div>
      <div className="flex items-center divide-x">
        <div className="flex items-end py-3 px-4 gap-2 rounded-bl-lg whitespace-nowrap w-1/2">
          <p className="font-medium text-xl">₹ 14,995</p>
          <p className="text-sm line-through text-gray-dark">₹ 14,995</p>
        </div>
        <div className="flex justify-center items-center gap-2 py-3 px-4 rounded-br-lg w-1/2">
          <div className="font-medium text-xl whitespace-nowrap">
            Add to Bag
          </div>
          <div>
            <ViewAllArrow />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardScrollable

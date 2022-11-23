import React from 'react'

import air_max from '../../assets/img/air_max_flyknit_racer_shoes.png'

import { ReactComponent as Heart } from '../../assets/svg/heart.svg'
import ViewAllArrow from '../../assets/SVGComponent/ViewAllArrow'

const ProductCard = () => {
  return (
    <div className="flex flex-col border rounded laptop:rounded-lg divide-y hover:shadow-card">
      <div className="rounded-t-lg relative">
        <img src={air_max} alt="air_max" />
        <div className="laptop:hidden absolute top-3 right-3">
          <Heart />
        </div>
      </div>
      <div className="flex items-center justify-between p-2 laptop:py-3 laptop:px-4 gap-2">
        <div className="flex font-bold text-13 laptop:text-xl">
          Nike Air Max Flyknit Racer
        </div>
        <div className="hidden laptop:block">
          <Heart />
        </div>
      </div>
      <div className="flex items-center divide-x text-13 laptop:text-xl">
        <div className="flex items-end p-2 laptop:py-3 laptop:px-4 gap-2 rounded-bl-lg whitespace-nowrap w-1/2">
          <p className="font-medium">₹ 14,995</p>
          <p className="text-10 laptop:text-sm line-through text-gray-dark">
            ₹ 14,995
          </p>
        </div>
        <div className="hidden laptop:flex justify-center items-center py-3 px-4 gap-2 rounded-br-lg w-1/2">
          <div className="font-medium text-xl  whitespace-nowrap">
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

export default ProductCard

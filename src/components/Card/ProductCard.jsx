import React from 'react'

import air_max from '../../assets/img/air_max_flyknit_racer_shoes.png'

import { ReactComponent as Heart } from '../../assets/svg/heart.svg'
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg'

const ProductCard = () => {
  return (
    <div className="flex flex-col border rounded-lg divide-y hover:shadow-card">
      <div className="rounded-t-lg">
        <img src={air_max} alt="air_max" />
      </div>
      <div className="flex items-center py-3 px-4 gap-2">
        <div className="flex font-bold text-xl ">
          Nike Air Max Flyknit Racer
        </div>
        <Heart />
      </div>
      <div className="flex items-center divide-x">
        <div className="flex items-center py-3 px-4 gap-2 rounded-bl-lg">
          <p className="font-medium text-xl">₹ 14,995</p>
          <p className="text-sm line-through text-gray-dark">₹ 14,995</p>
        </div>
        <div className="flex justify-ceter items-center py-3 px-4 gap-2 rounded-br-lg">
          <div className="font-medium text-xl">Add to Bag</div>
          <div className="rotate-180">
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

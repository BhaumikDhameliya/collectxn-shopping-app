import React from 'react'
import { Link } from 'react-router-dom'

import air_max from '../../assets/img/air_max_flyknit_racer_shoes.png'

import { ReactComponent as Heart } from '../../assets/svg/heart.svg'
import ViewAllArrow from '../../assets/SVGComponent/ViewAllArrow'

const ProductCardScrollable = (props) => {
  const { product } = props

  return (
    <div className="flex flex-col border rounded-lg divide-y hover:shadow-card flex-none w-55 laptop:w-96">
      <div className="rounded-t-lg relative">
        <Link to={`/product/${product?.id}`}>
          <img
            src={product?.ProductImages?.[0]?.image || air_max}
            alt={product?.name}
            className="rounded-t-lg m-auto h-55 w-55 laptop:h-96 laptop:w-96"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between p-2 laptop:py-3 laptop:px-4 gap-2">
        <div className="flex font-bold text-xs laptop:text-xl">
          {product?.name}
        </div>
        <div className="hidden laptop:block">
          <Heart />
        </div>
      </div>
      <div className="flex flex-col laptop:flex-row items-center divide-y laptop:divide-y-0 laptop:divide-x text-xs laptop:text-xl">
        <div className="flex items-end p-2 laptop:py-3 laptop:px-4 gap-2 rounded-bl-lg whitespace-nowrap flex-grow w-full laptop:w-1/2">
          <p className="font-medium">₹ {product?.price}</p>
          <p className="text-10 laptop:text-sm line-through text-gray-dark">
            ₹ {product?.displayPice}
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

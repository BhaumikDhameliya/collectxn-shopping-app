import React, { useState } from 'react'

import { CircleX, Minus, Plus } from 'akar-icons'

import air_max from '../../assets/img/air_max_flyknit_racer_shoes.png'

const CartProduct = () => {
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => prev - 1)
  return (
    <div className="flex px-4 py-6 gap-4 bg-white border-b border-gray-mid">
      <div>
        <img
          src={air_max}
          alt="air_max"
          className="w-16 rounded-md tablet:w-48"
        />
      </div>
      <div className="flex flex-col justify-between gap-6 flex-grow">
        <div className="flex gap-6 justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <p className="font-bold tablet:text-2xl">Air Max Flyknit Racer</p>
              <p className="font-medium text-13 tablet:text-base text-gray-mid">
                Nike
              </p>
            </div>
            <div className="flex flex-col gap-2 font-medium text-13">
              <p>Size: UK 8</p>
              <p>Select Color: White</p>
            </div>
          </div>
          <div>
            <CircleX strokeWidth={1} size={32} />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="font-bold">₹ 12,699.00</p>
          <div className="flex items-center p-2 gap-2 bg-white border rounded-full">
            <button disabled={quantity < 2} onClick={decreaseQuantity}>
              <Minus size={12} color={quantity < 2 ? '#B3B3B3' : '#161617'} />
            </button>
            <p>{quantity}</p>
            <button onClick={increaseQuantity}>
              <Plus size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct

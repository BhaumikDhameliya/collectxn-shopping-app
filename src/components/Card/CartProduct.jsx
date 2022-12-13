import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { CircleX, Minus, Plus } from 'akar-icons'

import air_max from '../../assets/img/air_max_flyknit_racer_shoes.png'
import { removeFromCart } from '../../api/cart.api'
import { removeProductFromCart } from '../../features/cart/cartSlice'

const CartProduct = (props) => {
  const { cartItem } = props
  const { name = '', brand = '', image } = cartItem?.Product

  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(cartItem?.quantity)

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => prev - 1)

  const handleRemoveProductFromCart = async () => {
    try {
      const res = await removeFromCart(cartItem.id)
      if (res.status === 200) {
        dispatch(removeProductFromCart(cartItem))
      }
    } catch (error) {
      console.log('error-----', error)
    }
  }

  return (
    <div className="flex px-4 py-6 gap-4 bg-white border-b border-gray-mid">
      <div>
        <img src={image} alt="name" className="w-16 rounded-md tablet:w-48" />
      </div>
      <div className="flex flex-col justify-between gap-6 flex-grow">
        <div className="flex gap-6 items-start justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <p className="font-bold tablet:text-2xl">{name}</p>
              <p className="font-medium text-13 tablet:text-base text-gray-mid">
                {brand}
              </p>
            </div>
            <div className="flex flex-col gap-2 font-medium text-13">
              <p>Size: {cartItem?.size}</p>
              <p>Select Color: {cartItem?.color}</p>
            </div>
          </div>
          <button onClick={handleRemoveProductFromCart}>
            <CircleX strokeWidth={1} size={32} />
          </button>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="font-bold">₹ {cartItem?.price}</p>
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

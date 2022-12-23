import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { CircleX, Minus, Plus } from 'akar-icons'

import {
  addToCart,
  decreaseCartQuantity,
  removeFromCart,
} from '../../api/cart.api'
import {
  removeProductFromCart,
  replaceCartItem,
} from '../../features/cart/cartSlice'

const CartProduct = (props) => {
  const { cartItem } = props
  const { color = '', size = '', Product = {} } = cartItem
  const { name = '', brand = '', image, id } = Product

  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)
  const [quantity, setQuantity] = useState(cartItem?.quantity)

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => prev - 1)

  const handleRemoveProductFromCart = async () => {
    try {
      setIsLoading(true)
      const res = await removeFromCart(cartItem.id)
      if (res.status === 200) {
        dispatch(removeProductFromCart(cartItem))
      }
    } catch (error) {
      console.log('error-----', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleIncreaseQuantity = async () => {
    try {
      const cartRes = await addToCart({
        quantity: quantity,
        ProductId: id,
        color: color,
        size: size,
      })
      const updatedCartItem = cartRes?.data?.cartItem
      if (updatedCartItem) {
        increaseQuantity()
        dispatch(
          replaceCartItem({ ...cartItem, quantity: cartItem?.quantity + 1 }),
        )
      }
      setIsLoading(true)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  const handleDecreaseQuantity = async () => {
    try {
      setIsLoading(true)
      const cartRes = await decreaseCartQuantity(cartItem.id)
      if (cartRes?.status === 200) {
        decreaseQuantity()
        dispatch(
          replaceCartItem({ ...cartItem, quantity: cartItem?.quantity - 1 }),
        )
      }
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  console.log('isLoading-----', isLoading)

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
            <button disabled={quantity < 2} onClick={handleDecreaseQuantity}>
              <Minus size={12} color={quantity < 2 ? '#B3B3B3' : '#161617'} />
            </button>
            <p>{quantity}</p>
            <button onClick={handleIncreaseQuantity}>
              <Plus size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct

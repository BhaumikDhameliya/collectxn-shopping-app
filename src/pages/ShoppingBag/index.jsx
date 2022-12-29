import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ArrowLeft } from 'akar-icons'

import PopButton from '../../components/buttons/PopButton'
import EmptyShoppingBag from './EmptyShoppingBag'
import Orders from './Orders'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { getMyCart } from '../../api/cart.api'
import { setCartData } from '../../features/cart/cartSlice'
import Checkout from '../Checkout'

const ShoppingBag = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [showCheckout, setShowCheckout] = useState(false)

  const cart = useSelector((state) => state.cart.cart)
  const userProfile = useSelector((state) => state.user.profile)

  const goBack = () => navigate(-1)

  const handleProceedToCheckoutClick = () => {
    setShowCheckout(true)
  }

  const getCartData = useCallback(async () => {
    const cartRes = await getMyCart()
    const cartData = cartRes?.data?.cart
    if (cartData) {
      dispatch(setCartData(cartData))
    }
  }, [dispatch])

  useEffect(() => {
    if (Object.keys(userProfile || {})?.length) {
      getCartData()
    }
  }, [getCartData, userProfile])

  if (showCheckout) {
    return <Checkout />
  }

  return (
    <>
      <div className="hidden laptop:block h-16.5 tablet:h-22">
        <Navbar />
      </div>
      <div className="bg-white flex flex-col min-h-screen">
        <div className="flex items-center px-4 py-6 gap-10 border-b laptop:hidden">
          <button className="absolute" onClick={goBack}>
            <ArrowLeft strokeWidth={1} size={32} />
          </button>
          <span className="flex-grow text-center font-bold text-xl">
            YOUR BAG
          </span>
        </div>
        <div className="hidden laptop:flex items-center justify-center p-4 tablet:px-8 laptop:px-20 laptop:pt-8 tablet:justify-start">
          <div className="flex gap-1.5 font-medium text-13">
            <p className="text-gray-mid">Home</p>
            <p className="text-gray-mid">/</p>
            <p>Bag</p>
          </div>
        </div>
        <div className="hidden laptop:block font-bold text-31 px-20 pt-8 pb-6">
          Shopping Bag
        </div>
        <div className="flex flex-col items-center justify-between flex-grow">
          {cart?.cartItems?.length ? (
            <>
              <Orders cartItems={cart?.cartItems} />
            </>
          ) : (
            <EmptyShoppingBag />
          )}
          <div className="flex items-center px-4 py-3 gap-5 border-t relative bottom-0 w-full laptop:hidden">
            <PopButton
              btnClasses="bg-black-mate"
              onClick={handleProceedToCheckoutClick}
            >
              Proceed to Checkout
            </PopButton>
          </div>
        </div>
      </div>
      <div className="hidden laptop:block">
        <Footer />
      </div>
    </>
  )
}

export default ShoppingBag

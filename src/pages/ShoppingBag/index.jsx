import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowLeft } from 'akar-icons'

import PopButton from '../../components/buttons/PopButton'
import EmptyShoppingBag from './EmptyShoppingBag'
import Orders from './Orders'

const ShoppingBag = () => {
  const navigate = useNavigate()

  const [bag, setBag] = useState('empty')

  const goBack = () => navigate(-1)

  const handleCheckoutClick = () => {
    if (bag === 'empty') {
      setBag('full')
    } else {
      navigate('/checkout')
    }
  }

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <div className="flex items-center px-4 py-6 gap-10 border-b">
        <button className="absolute" onClick={goBack}>
          <ArrowLeft strokeWidth={1} size={32} />
        </button>
        <span className="flex-grow text-center font-bold text-xl">
          YOUR BAG
        </span>
      </div>
      <div className="flex flex-col items-center justify-between flex-grow">
        {bag === 'empty' ? <EmptyShoppingBag /> : <Orders />}
        <div className="flex items-center px-4 py-3 gap-5 border-t relative bottom-0 w-full">
          <PopButton btnClasses="bg-black-mate" onClick={handleCheckoutClick}>
            Proceed to Checkout
          </PopButton>
        </div>
      </div>
    </div>
  )
}

export default ShoppingBag

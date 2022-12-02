import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/Navbar'

import { ReactComponent as OrderPlacedBag } from '../../assets/svg/order_placed_bag.svg'
import { ReactComponent as VerifiedRoundedSVG } from '../../assets/svg/verified_rounded.svg'

const OrderPlaced = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16.5 tablet:pt-22 min-h-screen flex">
        <div className="flex flex-col items-center justify-center gap-3 flex-grow p-3">
          <div className="flex flex-col items-center justify-center">
            <OrderPlacedBag />
            <div className="flex gap-3 items-center text-center mt-8">
              <p className="font-bold text-2xl">Order placed successfully</p>
              <div>
                <VerifiedRoundedSVG />
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-black-mate text-xl flex items-center justify-center px-4 py-2 tablet:px-6 tablet:py-3 gap-[10px] rounded-full w-full font-medium tablet:text-xl border border-black-mate hover:shadow-btn hover:bg-punchy-neon hover:text-black-mate text-white">
                Continue Shopping
              </button>
            </div>
            <div className="mt-4">
              <Link to="/" className="border-b">
                Go to orders page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPlaced

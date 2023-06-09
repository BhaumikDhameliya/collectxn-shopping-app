import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowLeft } from 'akar-icons'

// import payment from '../../assets/img/payment.png'
import { ReactComponent as ShieldSVG } from '../../assets/svg/shield.svg'

import PopButton from '../../components/buttons/PopButton'
import AddressAndBilling from './AddressAndBilling'
import { handlePlaceOrderFromCart } from '../../utils/placeOrder/placeOrder.utils'

const Checkout = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  // const [showPaymentPage, setShowPaymentPage] = useState(false)
  // const togglePaymentPage = () => setShowPaymentPage((prev) => !prev)

  const [isLoading, setIsLoading] = useState(false)

  const handlePlaceOrder = async () => {
    try {
      setIsLoading(true)
      await handlePlaceOrderFromCart()
    } catch (error) {
      console.log('error-----', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="bg-white flex flex-col min-h-screen">
        <div className="flex items-center px-4 tablet:px-8 py-6 gap-10 border-b">
          <button className="absolute" onClick={goBack}>
            <ArrowLeft strokeWidth={1} size={32} />
          </button>
          <span className="flex-grow text-center font-bold text-xl">
            Checkout
          </span>
        </div>
        <div className="flex flex-col items-center justify-between flex-grow">
          <AddressAndBilling />
          <div className="flex flex-col items-center px-4 tablet:px-8 py-3 gap-5 border-t relative bottom-0 w-full">
            <PopButton
              btnClasses="bg-black-mate"
              onClick={handlePlaceOrder}
              disabled={isLoading}
            >
              Place order
            </PopButton>
            <div className="flex items-center px-2 py-1 gap-2">
              <div>
                <ShieldSVG />
              </div>
              <p className="font-cera-pro font-medium">100% Secure</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className={`absolute ${
          showPaymentPage ? 'block' : 'hidden'
        } bg-black bg-opacity-50 min-h-full min-w-full top-0 left-0 flex items-center justify-center flex-grow`}
        // onClick={togglePaymentPage}
        onClick={() => navigate('/order-placed')}
      >
        <img src={payment} alt="payment" />
      </div> */}
    </>
  )
}

export default Checkout

import React from 'react'

import CartProduct from '../../components/Card/CartProduct'
import ProductCardScrollable from '../../components/Card/ProductCardScrollable'
import AddressAndBilling from '../Checkout/AddressAndBilling'

const Orders = (props) => {
  const { cartItems = [] } = props

  return (
    <div className="flex flex-col w-full laptop:px-20">
      <div className="laptop:flex gap-6">
        <div className="border-t border-gray-mid flex-grow">
          {cartItems?.map((cartItem) => {
            if (!cartItem?.Product) return null
            return <CartProduct cartItem={cartItem} key={cartItem.id} />
          })}
        </div>
        <div className="hidden laptop:flex">
          <AddressAndBilling />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 laptop:gap-8 px-1/20 mt-4 laptop:px-0">
        <div className="flex justify-between items-center w-full">
          <div className="font-cera-pro font-bold tablet:text-xl">
            People also buy/wishlist
          </div>
        </div>
        <div className="flex items-center gap-4 w-full overflow-x-scroll no-scrollbar pb-1/20">
          <ProductCardScrollable />
          <ProductCardScrollable />
          <ProductCardScrollable />
          <ProductCardScrollable />
          <ProductCardScrollable />
        </div>
      </div>
    </div>
  )
}

export default Orders

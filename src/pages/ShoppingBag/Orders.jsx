import React from 'react'

import CartProduct from '../../components/Card/CartProduct'
import ProductCardScrollable from '../../components/Card/ProductCardScrollable'

const Orders = () => {
  return (
    <div className="flex flex-col w-full">
      <div>
        <CartProduct />
        <CartProduct />
      </div>
      <div className="flex flex-col items-center gap-4 laptop:gap-8 px-1/20 mt-4">
        <div className="flex justify-between items-center w-full">
          <div className="font-cera-pro font-bold">
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

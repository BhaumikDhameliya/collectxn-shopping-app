import React from 'react'
import ProductCard from '../../components/Card/ProductCard'
import SelectInput from '../../components/Input/SelectInput'

const Wishlist = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 tablet:gap-8">
        <div className="flex flex-col gap-4 tablet:flex-row tablet:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <p className="font-bold text-31 hidden laptop:block">
                My Wishlist
              </p>
              <div className="font-medium">(25 products)</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold">sort by:</p>
            <div>
              <SelectInput
                selectClasses="font-semibold"
                options={[
                  { value: 'Latest', name: 'Latest' },
                  { value: 'price: Low to High', name: 'Price: Low to High' },
                  { value: 'price: High to Low', name: 'Price: High to Low' },
                  { value: 'newest Arrivals', name: 'Newest Arrivals' },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 tablet:grid-cols-3 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default Wishlist

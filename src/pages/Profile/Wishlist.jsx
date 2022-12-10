import React from 'react'
import ProductCard from '../../components/Card/ProductCard'
import SelectInput from '../../components/Input/SelectInput'

const Wishlist = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4">
        <div className="font-medium">(25 products)</div>
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
        <div className="flex flex-wrap gap-4 justify-center">
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

import React from 'react'

import ViewAllArrow from '../../assets/SVGComponent/ViewAllArrow'

import ProductCard from '../../components/Card/ProductCard'
import PopButton from '../buttons/PopButton'

const ExploreSneakers = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <p className="font-cera-pro font-bold text-xl tablet:text-3xl border-b">
          Sneakers
        </p>
        <div className="hidden tablet:flex items-center py-1 gap-2">
          <p className="font-medium text-base">View All</p>
          <div className="">
            <ViewAllArrow />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 tablet:flex justify-between gap-4 tablet:gap-6 overflow-auto no-scrollbar py-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex tablet:hidden items-center justify-center">
        <div>
          <PopButton type="outline">View more</PopButton>
        </div>
      </div>
    </div>
  )
}

export default ExploreSneakers

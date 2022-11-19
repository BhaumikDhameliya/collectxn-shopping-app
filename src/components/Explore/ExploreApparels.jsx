import React from 'react'

import ViewAllArrow from '../../assets/SVGComponent/ViewAllArrow'

import ProductCard from '../../components/Card/ProductCard'

const ExploreApparels = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <p className="font-cera-pro font-bold text-3xl border-b">Apparels</p>
        <div className="flex items-center py-1 gap-2">
          <p className="font-medium text-base">View All</p>
          <div className="">
            <ViewAllArrow />
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-6 overflow-hidden py-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default ExploreApparels

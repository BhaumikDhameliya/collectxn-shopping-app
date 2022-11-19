import React from 'react'

import { ReactComponent as ArrowSVG } from '../../assets/svg/arrow.svg'

import ProductCard from '../../components/Card/ProductCard'

const ExploreApparels = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="font-cera-pro font-bold text-3xl border-b">Apparels</p>
        <div className="flex items-center py-1 gap-2">
          <p className="font-medium text-base">View All</p>
          <div className="rotate-180">
            <ArrowSVG />
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-6 overflow-hidden">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default ExploreApparels

import React from 'react'
import { useNavigate } from 'react-router-dom'

import ViewAllArrow from '../../assets/SVGComponent/ViewAllArrow'

import ProductCard from '../../components/Card/ProductCard'
import PopButton from '../buttons/PopButton'

const ExploreJewellary = () => {
  const navigate = useNavigate()

  const goToJewelleryPage = () => {
    navigate('/jewellery')
  }
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <p className="font-cera-pro font-bold text-xl laptop:text-3xl border-b">
          Jewellary
        </p>
        <button
          className="hidden laptop:flex items-center py-1 gap-2"
          onClick={goToJewelleryPage}
        >
          <p className="font-medium text-base">View All</p>
          <div className="">
            <ViewAllArrow />
          </div>
        </button>
      </div>
      <div className="grid grid-cols-2 tablet:flex justify-between gap-4 tablet:gap-6 overflow-auto no-scrollbar py-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex laptop:hidden items-center justify-center">
        <div>
          <PopButton variant="outline" onClick={goToJewelleryPage}>
            View more
          </PopButton>
        </div>
      </div>
    </div>
  )
}

export default ExploreJewellary

import React, { useState } from 'react'

import sneakers_banner from '../assets/img/banner/sneakers_banner.png'

import PopButton from '../components/buttons/PopButton'
import ProductCard from '../components/Card/ProductCard'
import FiltersMenu from '../components/Menu/FiltersMenu'
import SortByMenu from '../components/Menu/SortByMenu'

const ProductListing = () => {
  const [showSortByMenu, setShowSortByMenu] = useState(false)
  const [showFiltersMenu, setShowFiltersMenu] = useState(false)

  const toggleSortByMenu = () => setShowSortByMenu((prev) => !prev)
  const toggleFiltersMenu = () => setShowFiltersMenu((prev) => !prev)
  return (
    <div>
      {showSortByMenu && <SortByMenu toggle={toggleSortByMenu} />}
      {showFiltersMenu && <FiltersMenu toggle={toggleFiltersMenu} />}
      <div className="flex items-center divide-x border-b text-center">
        <button className="flex-grow p-4 font-bold" onClick={toggleFiltersMenu}>
          Filters
        </button>
        <button className="flex-grow p-4 font-bold" onClick={toggleSortByMenu}>
          Sort by:
        </button>
      </div>
      <div className="flex items-center justify-center p-4">
        <div className="flex gap-1.5 font-medium text-13">
          <p className="text-gray-mid">Home</p>
          <p className="text-gray-mid">/</p>
          <p>Sneakers</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-4">
        <div>
          <img src={sneakers_banner} alt="sneakers_banner" className="w-full" />
        </div>

        <div className="flex flex-col gap-6 pb-8">
          <div className="grid grid-cols-2 tablet:flex justify-between gap-4 tablet:gap-6 overflow-auto no-scrollbar">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="flex laptop:hidden items-center justify-center">
            <div>
              <PopButton type="outline" onClick={() => {}}>
                Load more
              </PopButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListing

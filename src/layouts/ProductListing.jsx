import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'

import sneakers_banner from '../assets/img/banner/sneakers_banner.png'

import PopButton from '../components/buttons/PopButton'
import ProductCard from '../components/Card/ProductCard'
import SelectInput from '../components/Input/SelectInput'
import FiltersMenu from '../components/Menu/FiltersMenu'
import SortByMenu from '../components/Menu/SortByMenu'

const ProductListing = () => {
  // const { category } = useParams()

  // const [categoryData, setCategoryData] = useState()
  const [showSortByMenu, setShowSortByMenu] = useState(false)
  const [showFiltersMenu, setShowFiltersMenu] = useState(false)

  const toggleSortByMenu = () => setShowSortByMenu((prev) => !prev)
  const toggleFiltersMenu = () => setShowFiltersMenu((prev) => !prev)
  return (
    <div>
      {showSortByMenu && <SortByMenu toggle={toggleSortByMenu} />}
      {showFiltersMenu && <FiltersMenu toggle={toggleFiltersMenu} />}
      <div className="flex items-center divide-x border-b text-center laptop:hidden">
        <button className="flex-grow p-4 font-bold" onClick={toggleFiltersMenu}>
          Filters
        </button>
        <button className="flex-grow p-4 font-bold" onClick={toggleSortByMenu}>
          Sort by:
        </button>
      </div>
      <div>
        <div className="flex items-center justify-center p-4 tablet:px-8 laptop:px-20 laptop:pt-8 tablet:justify-start">
          <div className="flex gap-1.5 font-medium text-13">
            <p className="text-gray-mid">Home</p>
            <p className="text-gray-mid">/</p>
            <p>Sneakers</p>
          </div>
        </div>
        <div className="flex justify-evenly px-10">
          <div className="hidden laptop:block">
            <FiltersMenu />
          </div>
          <div className="flex flex-col gap-8 px-4 tablet:px-8 laptop:px-10">
            <div className="hidden laptop:flex items-center justify-end gap-2">
              <p className="font-bold">sort by:</p>
              <div>
                <SelectInput
                  selectClasses="font-semibold"
                  options={[
                    { value: 'recommanded', name: 'Recommanded' },
                    { value: 'price: Low to High', name: 'Price: Low to High' },
                    { value: 'price: High to Low', name: 'Price: High to Low' },
                    { value: 'newest Arrivals', name: 'Newest Arrivals' },
                  ]}
                />
              </div>
            </div>
            <div>
              <img
                src={sneakers_banner}
                alt="sneakers_banner"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-6 pb-8 tablet:pb-12">
              <div className="grid grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-3 justify-between gap-4 tablet:gap-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <PopButton type="outline" onClick={() => {}}>
                    Load more
                  </PopButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListing

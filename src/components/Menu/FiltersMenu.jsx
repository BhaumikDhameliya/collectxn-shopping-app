import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { ReactComponent as ArrowSVG } from '../../assets/svg/arrow.svg'
import BrandFilter from '../Filter/BrandFilter'
import CategoryFilter from '../Filter/CategoryFilter'
import ColorFilter from '../Filter/ColorFilter'
// import GenderFilter from '../Filter/GenderFilter'
// import PriceFilter from '../Filter/PriceFilter'
// import RealeaseYearFilter from '../Filter/ReleaseYearFilter'
import SizeFilter from '../Filter/SizeFilter'
import TypeFilter from '../Filter/TypeFilter'

const FiltersMenu = (props) => {
  const { toggle } = props
  const { categoryId } = useParams()

  const category = useSelector(
    (state) => state.category.categories?.[categoryId],
  )
  console.log('category-----', category)

  return (
    <div className="absolute laptop:relative bg-white flex flex-col w-full z-10">
      <div className="p-6 laptop:pl-10 laptop:pr-0">
        <div className="flex items-center gap-6 pb-5">
          <button onClick={toggle} className="laptop:hidden">
            <ArrowSVG />
          </button>
          <p className="font-bold text-xl uppercase">Filters</p>
        </div>
        <div className="flex flex-col gap-6 pt-4">
          <CategoryFilter />
          {category?.brands && <BrandFilter brandList={category?.brands} />}
          {/* <GenderFilter /> */}
          {category?.sizes && <SizeFilter sizeList={category?.sizes} />}
          {category?.colors && <ColorFilter colorList={category?.colors} />}
          {category?.types && <TypeFilter typeList={category?.types} />}
          {/* <RealeaseYearFilter />
          <PriceFilter /> */}
        </div>
      </div>
      <div className="flex flex-row items-center border divide-x text-center laptop:hidden">
        <button
          className="flex flex-grow px-2.5 py-4 items-center justify-center"
          onClick={toggle}
        >
          <p className="font-bold text-13">Cancel</p>
        </button>
        <button className="flex flex-grow px-2.5 py-4 items-center justify-center bg-punchy-neon">
          <p className="font-bold text-13">Apply</p>
        </button>
      </div>
    </div>
  )
}

export default FiltersMenu

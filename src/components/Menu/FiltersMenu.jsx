import React from 'react'

import { ReactComponent as ArrowSVG } from '../../assets/svg/arrow.svg'
import CategoryFilter from '../Filter/CategoryFilter'

const FiltersMenu = (props) => {
  const { toggle } = props
  return (
    <div className="absolute bg-white flex flex-col w-full z-10">
      <div className="p-6">
        <div className="flex items-center gap-6 pb-5">
          <button onClick={toggle}>
            <ArrowSVG />
          </button>
          <p className="font-bold text-xl uppercase">Filters</p>
        </div>
        <div className="flex flex-col gap-6 pt-4">
          <CategoryFilter></CategoryFilter>
        </div>
      </div>
      <div className="flex flex-row items-center border divide-x text-center">
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

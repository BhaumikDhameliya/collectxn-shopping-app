import React from 'react'

import { ReactComponent as CloseRoundedWhiteSVG } from '../../assets/svg/close_rounded_white.svg'

const SortByMenu = (props) => {
  const { toggle } = props
  return (
    <div className="absolute flex flex-col overflow-y-auto bg-white border-b w-full z-10 divide-y divide-gray-mid">
      <div className="flex items-center p-4 gap-4 justify-between">
        <p className="font-bold uppercase text-xl">Sort by</p>
        <button onClick={toggle}>
          <CloseRoundedWhiteSVG />
        </button>
      </div>
      <div className="flex flex-col divide-y divide-gray-mid">
        <p className="px-2.5 py-4 font-cera-pro font-semibold">Recommanded</p>
        <p className="px-2.5 py-4 font-cera-pro font-semibold">
          Price: Low to High
        </p>
        <p className="px-2.5 py-4 font-cera-pro font-semibold">
          Price: High to Low
        </p>
        <p className="px-2.5 py-4 font-cera-pro font-semibold">
          Newest Arrivals
        </p>
      </div>
    </div>
  )
}

export default SortByMenu

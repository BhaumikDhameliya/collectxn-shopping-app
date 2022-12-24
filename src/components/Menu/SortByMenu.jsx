import React from 'react'

import { ReactComponent as CloseRoundedWhiteSVG } from '../../assets/svg/close_rounded_white.svg'
import { sortingOptions } from '../../layouts/ProductListing'

const SortByMenu = (props) => {
  const { toggle, setSortBy } = props

  const handleSortOptionSelect = (value) => {
    return () => {
      let [sortKey, sortValue] = value.split(' ')
      sortKey = `sortBy[${sortKey}]`
      setSortBy({ [sortKey]: sortValue })
      toggle()
    }
  }

  return (
    <div className="absolute flex flex-col overflow-y-auto bg-white border-b w-full z-10 divide-y divide-gray-mid">
      <div className="flex items-center p-4 gap-4 justify-between">
        <p className="font-bold uppercase text-xl">Sort by</p>
        <button onClick={toggle}>
          <CloseRoundedWhiteSVG />
        </button>
      </div>
      <div className="flex flex-col divide-y divide-gray-mid font-cera-pro font-medium">
        {sortingOptions?.map(({ value, name }) => {
          return (
            <button
              className="px-2.5 py-4"
              onClick={handleSortOptionSelect(value)}
              key={value}
            >
              {name}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default SortByMenu

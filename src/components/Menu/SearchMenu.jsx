import React from 'react'

import { CircleX } from 'akar-icons'
import TextInput from '../Input/TextInput'
import SearchProduct from '../Card/SearchProduct'
import NoSearchMatch from '../Card/NoSearchMatch'

const SearchMenu = (props) => {
  const { toggleSearchMenu } = props

  return (
    <div className="flex flex-col bg-white absolute w-full z-10">
      <div className="flex flex-col items-center px-4 tablet:px-20 py-6 gap-5">
        <p className="font-bold tablet:text-31">Search Products</p>
        <TextInput placeholder="" buttonText="search" />
      </div>
      <NoSearchMatch />
      <div className="flex flex-col w-full tablet:px-10">
        <SearchProduct />
        <SearchProduct />
        <SearchProduct />
        <SearchProduct />
        <SearchProduct />
      </div>
      <button
        className="absolute top-4 right-4 tablet:top-8 tablet:right-8"
        onClick={toggleSearchMenu}
      >
        <CircleX strokeWidth={1} size={26} />
      </button>
    </div>
  )
}

export default SearchMenu

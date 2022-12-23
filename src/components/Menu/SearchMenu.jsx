import React, { useEffect, useMemo, useState } from 'react'

import debounce from 'lodash.debounce'

import { CircleX } from 'akar-icons'
import TextInput from '../Input/TextInput'
import SearchProduct from '../Card/SearchProduct'
import NoSearchMatch from '../Card/NoSearchMatch'
import { getSearchedProducts } from '../../api/products.api'

const SearchMenu = (props) => {
  const { toggleSearchMenu } = props

  // const [name, setName] = useState('')
  const [products, setProducts] = useState([])

  const fetchSearchedProduct = async (name) => {
    const searchRes = await getSearchedProducts({ name })
    const productsData = searchRes?.data?.suggestions
    if (productsData) {
      setProducts(productsData)
    }
  }

  const handleNameChange = (e) => {
    const name = e.target.value
    // setName(name)
    fetchSearchedProduct(name)
  }

  const debouncedResults = useMemo(() => {
    return debounce(handleNameChange, 300)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    return () => {
      debouncedResults.cancel()
    }
  })

  return (
    <div className="flex flex-col bg-white absolute w-full z-20">
      <div className="flex flex-col items-center px-4 tablet:px-20 py-6 gap-5">
        <p className="font-bold tablet:text-31">Search Products</p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            // fetchSearchedProduct(name)
          }}
          className="w-full"
        >
          <TextInput
            placeholder=""
            // buttonText="search"
            // onButtonClick={() => fetchSearchedProduct(name)}
            // value={name}
            // onChange={handleNameChange}
            onChange={debouncedResults}
            autoFocus="true"
          />
        </form>
      </div>
      {products?.length ? (
        <div className="flex flex-col w-full tablet:px-10">
          {products?.map((product) => {
            return (
              <SearchProduct
                product={product}
                key={product.id}
                toggleSearchMenu={toggleSearchMenu}
              />
            )
          })}
        </div>
      ) : (
        <NoSearchMatch />
      )}
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

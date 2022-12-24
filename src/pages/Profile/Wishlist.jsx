import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProductCard from '../../components/Card/ProductCard'
import SelectInput from '../../components/Input/SelectInput'

import { getLikedProducts } from '../../api/products.api'

import { setLikedProducts } from '../../features/product/productSlice'
import { sortingOptions } from '../../layouts/ProductListing'

const Wishlist = () => {
  const dispatch = useDispatch()

  const likedProducts = useSelector((state) => state.product.likedProducts)

  const [sortBy, setSortBy] = useState({})

  const handleSortOptionSelect = (e) => {
    const value = e.target.value
    let [sortKey, sortValue] = value.split(' ')
    sortKey = `sortBy[${sortKey}]`
    setSortBy({ [sortKey]: sortValue })
  }

  const getLikedProductsData = useCallback(
    async (params) => {
      const likedProductsData = await getLikedProducts(params)
      const likedProducts = likedProductsData?.data?.likedProducts
      if (likedProducts) {
        dispatch(setLikedProducts(likedProducts))
      }
    },
    [dispatch],
  )

  useEffect(() => {
    getLikedProductsData(sortBy)
  }, [getLikedProductsData, sortBy])

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 tablet:gap-8">
        <div className="flex flex-col gap-4 tablet:flex-row tablet:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <p className="font-bold text-31 hidden laptop:block">
                My Wishlist
              </p>
              <div className="font-medium">
                ({likedProducts?.length || 0} products)
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold">sort by:</p>
            <div>
              <SelectInput
                selectClasses="font-semibold"
                options={sortingOptions}
                onChange={handleSortOptionSelect}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 tablet:grid-cols-3 gap-4">
          {likedProducts?.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Wishlist

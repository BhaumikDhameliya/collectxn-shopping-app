import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProductCard from '../../components/Card/ProductCard'
import SelectInput from '../../components/Input/SelectInput'

import { getLikedProducts } from '../../api/products.api'

import { setLikedProducts } from '../../features/product/productSlice'

const Wishlist = () => {
  const dispatch = useDispatch()

  const [count, setCount] = useState(0)

  const likedProducts = useSelector((state) => state.product.likedProducts)
  console.log('likedProducts----', likedProducts)

  const getLikedProductsData = useCallback(async () => {
    const likedProductsData = await getLikedProducts()
    const likedProducts = likedProductsData?.data?.likedProducts
    setCount(likedProductsData?.results || 0)
    if (likedProducts) {
      dispatch(setLikedProducts(likedProducts))
    }
  }, [dispatch])

  useEffect(() => {
    getLikedProductsData()
  }, [getLikedProductsData])

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 tablet:gap-8">
        <div className="flex flex-col gap-4 tablet:flex-row tablet:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <p className="font-bold text-31 hidden laptop:block">
                My Wishlist
              </p>
              <div className="font-medium">({count} products)</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold">sort by:</p>
            <div>
              <SelectInput
                selectClasses="font-semibold"
                options={[
                  { value: 'Latest', name: 'Latest' },
                  { value: 'price: Low to High', name: 'Price: Low to High' },
                  { value: 'price: High to Low', name: 'Price: High to Low' },
                  { value: 'newest Arrivals', name: 'Newest Arrivals' },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 tablet:grid-cols-3 gap-4">
          {likedProducts?.map((product) => {
            return (
              <ProductCard key={product.id} product={product} isLiked={true} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Wishlist

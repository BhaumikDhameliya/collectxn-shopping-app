import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getAllProducts } from '../../api/products.api'

import ViewAllArrow from '../../assets/SVGComponent/ViewAllArrow'

import ProductCard from '../../components/Card/ProductCard'
import { setCategoryProducts } from '../../features/product/productSlice'
import PopButton from '../buttons/PopButton'

const ExploreCategory = (props) => {
  const { category } = props
  console.log('category----', category)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const products = useSelector(
    (state) => state.product.categoryProducts?.[category?.id],
  )

  const goToCategoryProductsPage = () => {
    navigate(`/category/${category?.id}`)
  }

  const getCategoryProuductsData = useCallback(async () => {
    const productList = await getAllProducts({ Categories: category?.id })
    if (productList) {
      let products = {}
      productList.forEach((product) => {
        products[product.id] = product
      })
      dispatch(setCategoryProducts({ categoryId: category.id, products }))
    }
  }, [category.id, dispatch])

  useEffect(() => {
    getCategoryProuductsData()
  }, [getCategoryProuductsData])

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold border-b font-cera-pro laptop:text-3xl">
          {category?.name}
        </p>
        <button
          className="items-center hidden gap-2 py-1 laptop:flex"
          onClick={goToCategoryProductsPage}
        >
          <p className="text-base font-medium">View All</p>
          <div className="">
            <ViewAllArrow />
          </div>
        </button>
      </div>
      <div className="grid justify-between grid-cols-2 gap-4 py-6 overflow-auto tablet:flex tablet:gap-6 no-scrollbar">
        {Object.entries(products || {}).map(([productId, product], index) => {
          if (index > 3) return null
          return <ProductCard key={productId} product={product} />
        })}
      </div>
      <div className="flex items-center justify-center laptop:hidden">
        <div>
          <PopButton variant="outline" onClick={goToCategoryProductsPage}>
            View more
          </PopButton>
        </div>
      </div>
    </div>
  )
}

export default ExploreCategory

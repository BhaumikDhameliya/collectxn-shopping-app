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
    const res = await getAllProducts({ Categories: category?.id })
    const productList = res?.data?.products
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
      <div className="flex justify-between items-center">
        <p className="font-cera-pro font-bold text-xl laptop:text-3xl border-b">
          {category?.name}
        </p>
        <button
          className="hidden laptop:flex items-center py-1 gap-2"
          onClick={goToCategoryProductsPage}
        >
          <p className="font-medium text-base">View All</p>
          <div className="">
            <ViewAllArrow />
          </div>
        </button>
      </div>
      <div className="grid grid-cols-2 tablet:flex justify-between gap-4 tablet:gap-6 overflow-auto no-scrollbar py-6">
        {Object.entries(products || {}).map(([productId, product], index) => {
          if (index > 3) return null
          return <ProductCard key={productId} product={product} />
        })}
      </div>
      <div className="flex laptop:hidden items-center justify-center">
        <div>
          <PopButton type="outline" onClick={goToCategoryProductsPage}>
            View more
          </PopButton>
        </div>
      </div>
    </div>
  )
}

export default ExploreCategory

import React, { useCallback, useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import ProductCardScrollable from '../../components/Card/ProductCardScrollable'
import { getRelatedProductDetails } from '../../api/products.api'

const RelatedProducts = () => {
  const { productId } = useParams()

  const [relatedProductList, setRelatedProductList] = useState()

  // const product = useSelector((state) => state.product.products?.[productId])
  // console.log('Product-----', product)

  const getCategoryProuductsData = useCallback(async () => {
    const productList = await getRelatedProductDetails({ productId })
    if (productList) {
      setRelatedProductList(productList)
    }
  }, [productId])

  useEffect(() => {
    getCategoryProuductsData()
  }, [getCategoryProuductsData])

  return (
    <div className="flex flex-col items-center gap-4 my-16 laptop:gap-8 px-1/20">
      <div className="flex items-center justify-between w-full">
        <div className="text-2xl font-bold font-cera-pro ">
          Product you might like
        </div>
      </div>
      <div className="flex items-center w-full gap-6 overflow-x-scroll no-scrollbar pb-1/20">
        {relatedProductList?.map((product) => {
          return <ProductCardScrollable product={product} key={product.id} />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts

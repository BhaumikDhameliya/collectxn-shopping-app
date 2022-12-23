import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../api/products.api'
import { useParams } from 'react-router-dom'

import sneakers_banner from '../assets/img/banner/sneakers_banner.png'

// import PopButton from '../components/buttons/PopButton'
import ProductCard from '../components/Card/ProductCard'
import SelectInput from '../components/Input/SelectInput'
import FiltersMenu from '../components/Menu/FiltersMenu'
import SortByMenu from '../components/Menu/SortByMenu'
import { setCategoryProducts } from '../features/product/productSlice'
import Breadcrumbs from '../components/Breadcrumbs'

const ProductListing = () => {
  const dispatch = useDispatch()
  const { categoryId } = useParams()

  const category = useSelector(
    (state) => state.category.categories?.[categoryId],
  )

  const products = useSelector(
    (state) => state.product.categoryProducts?.[categoryId],
  )

  // const [categoryData, setCategoryData] = useState()
  const [showSortByMenu, setShowSortByMenu] = useState(false)
  const [showFiltersMenu, setShowFiltersMenu] = useState(false)

  const toggleSortByMenu = () => setShowSortByMenu((prev) => !prev)
  const toggleFiltersMenu = () => setShowFiltersMenu((prev) => !prev)

  const getCategoryProuductsData = useCallback(async () => {
    const res = await getAllProducts({ Categories: categoryId })
    const productList = res?.data?.products
    if (productList) {
      let products = {}
      productList.forEach((product) => {
        products[product.id] = product
      })
      dispatch(setCategoryProducts({ categoryId: categoryId, products }))
    }
  }, [categoryId, dispatch])

  useEffect(() => {
    getCategoryProuductsData()
  }, [getCategoryProuductsData])

  return (
    <div>
      {showSortByMenu && <SortByMenu toggle={toggleSortByMenu} />}
      {showFiltersMenu && <FiltersMenu toggle={toggleFiltersMenu} />}
      <div className="flex items-center divide-x border-b text-center laptop:hidden">
        <button className="flex-grow p-4 font-bold" onClick={toggleFiltersMenu}>
          Filters
        </button>
        <button className="flex-grow p-4 font-bold" onClick={toggleSortByMenu}>
          Sort by:
        </button>
      </div>
      <div>
        <Breadcrumbs
          path={[
            { text: 'home', to: '/' },
            {
              text: category?.name,
            },
          ]}
        />
        <div className="flex justify-evenly px-10">
          <div className="hidden laptop:block">
            <FiltersMenu />
          </div>
          <div className="flex flex-col gap-8 px-4 tablet:px-8 laptop:px-10 flex-grow">
            <div className="hidden laptop:flex items-center justify-end gap-2">
              <p className="font-bold">sort by:</p>
              <div>
                <SelectInput
                  selectClasses="font-semibold"
                  options={[
                    { value: 'recommanded', name: 'Recommanded' },
                    { value: 'price: Low to High', name: 'Price: Low to High' },
                    { value: 'price: High to Low', name: 'Price: High to Low' },
                    { value: 'newest Arrivals', name: 'Newest Arrivals' },
                  ]}
                />
              </div>
            </div>
            <div>
              <img
                src={sneakers_banner}
                alt="sneakers_banner"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-6 pb-8 tablet:pb-12">
              <div className="grid grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-3 justify-between gap-4 tablet:gap-6">
                {Object.entries(products || {}).map(
                  ([productId, product], index) => {
                    if (index > 3) return null
                    return <ProductCard key={productId} product={product} />
                  },
                )}
              </div>
              {/* <div className="flex items-center justify-center">
                <div>
                  <PopButton variant="outline" onClick={() => {}}>
                    Load more
                  </PopButton>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListing

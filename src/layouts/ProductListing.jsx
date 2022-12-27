import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../api/products.api'
import { useParams } from 'react-router-dom'

import { ReactComponent as NoMatchBagSVG } from '../assets/svg/no_match_bag.svg'
import category_banner from '../assets/svg/category_page/category_banner.svg'
// import sneakers_banner from '../assets/img/banner/sneakers_banner.png'

// import PopButton from '../components/buttons/PopButton'
import ProductCard from '../components/Card/ProductCard'
import SelectInput from '../components/Input/SelectInput'
import FiltersMenu from '../components/Menu/FiltersMenu'
import SortByMenu from '../components/Menu/SortByMenu'
import { setCategoryProducts } from '../features/product/productSlice'
import Breadcrumbs from '../components/Breadcrumbs'
import Spinner from '../components/Spinner'

export const sortingOptions = [
  { value: 'price ASC', name: 'Price: Low to High' },
  { value: 'price DESC', name: 'Price: High to Low' },
  {
    value: 'avgRating ASC',
    name: 'Rating: Low to High',
  },
  {
    value: 'avgRating DESC',
    name: 'Rating: High to Low',
  },
  { value: 'releaseYear DESC', name: 'Newest Arrivals' },
  { value: 'releaseYear ASC', name: 'Oldest' },
]

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
  const [sortBy, setSortBy] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const toggleSortByMenu = () => setShowSortByMenu((prev) => !prev)
  const toggleFiltersMenu = () => setShowFiltersMenu((prev) => !prev)

  const handleSortOptionSelect = (e) => {
    const value = e.target.value
    let [sortKey, sortValue] = value.split(' ')
    sortKey = `sortBy[${sortKey}]`
    setSortBy({ [sortKey]: sortValue })
  }

  const getCategoryProuductsData = useCallback(
    async (params) => {
      setIsLoading(true)
      const res = await getAllProducts(params)
      const productList = res?.data?.products
      if (productList) {
        let products = {}
        productList.forEach((product) => {
          products[product.id] = product
        })
        dispatch(
          setCategoryProducts({ categoryId: params?.Categories, products }),
        )
      }
      setIsLoading(false)
    },
    [dispatch],
  )

  useEffect(() => {
    let params = { Categories: categoryId }
    if (Object.keys(sortBy).length) {
      params = {
        ...params,
        ...sortBy,
      }
    }
    getCategoryProuductsData(params)
  }, [categoryId, getCategoryProuductsData, sortBy])

  return (
    <div>
      {showSortByMenu && (
        <SortByMenu toggle={toggleSortByMenu} setSortBy={setSortBy} />
      )}
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
        <div className="flex items-center justify-center tablet:justify-start">
          <Breadcrumbs
            path={[
              { text: 'home', to: '/' },
              {
                text: category?.name,
              },
            ]}
          />
        </div>
        <div className="flex justify-evenly laptop:px-10 laptop:pb-10">
          <div className="hidden laptop:block">
            <FiltersMenu {...{ setIsLoading }} />
          </div>
          <div className="flex flex-col gap-8 px-4 tablet:px-8 laptop:px-10 flex-grow">
            <div className="hidden laptop:flex items-center justify-end gap-2">
              <p className="font-bold">sort by:</p>
              <div>
                <SelectInput
                  selectClasses="font-semibold"
                  onChange={handleSortOptionSelect}
                  options={sortingOptions}
                />
              </div>
            </div>
            <div className="bg-pink rounded flex items-center justify-between">
              <div className="ml-5 tablet:ml-9 my-2.5 tablet:my-8 whitespace-nowrap text-white">
                <div className="font-bold text-sm tablet:text-2xl laptop:text-4xl">
                  <p>Flat ₹500 off +</p>
                  <p>Free Shipping</p>
                </div>
                <div className="font-medium text-8 tablet:text-xs laptop:text-base font-cera-pro">
                  <p>On First Order</p>
                </div>
                <div className="flex items-center gap-1 tablet:gap-2 laptop:gap-2.5 font-medium text-8 tablet:text-xs laptop:text-base font-cera-pro mt-1 tablet:mt-2.5">
                  <p className="">Code:</p>
                  <div className="border laptop:border-2 border-dashed rounded-sm tablet:rounded laptop:rounded-md border-[#BE265D] bg-[#FF699F] p-1 uppercase">
                    COLLECTXN500
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={category_banner}
                  alt="category_banner"
                  className="h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 pb-8 tablet:pb-12">
              {isLoading ? (
                <Spinner />
              ) : Object.keys(products || {}).length ? (
                <div className="grid grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-3 justify-between gap-4 tablet:gap-6">
                  {Object.entries(products || {}).map(
                    ([productId, product], index) => {
                      if (index > 3) return null
                      return <ProductCard key={productId} product={product} />
                    },
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <NoMatchBagSVG />
                  <p className="font-bold text-gray-dark laptop:text-2xl">
                    We couldn't find any matches!
                  </p>
                </div>
              )}
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

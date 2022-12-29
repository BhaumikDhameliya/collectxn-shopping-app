import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import debounce from 'lodash.debounce'

import { ReactComponent as ArrowSVG } from '../../assets/svg/arrow.svg'
import BrandFilter from '../Filter/BrandFilter'
import CategoryFilter from '../Filter/CategoryFilter'
import ColorFilter from '../Filter/ColorFilter'
import GenderFilter from '../Filter/GenderFilter'
import PriceFilter from '../Filter/PriceFilter'
import RealeaseYearFilter from '../Filter/ReleaseYearFilter'
import SizeFilter from '../Filter/SizeFilter'
import TypeFilter from '../Filter/TypeFilter'

import { getAllProducts } from '../../api/products.api'
import { setCategoryProducts } from '../../features/product/productSlice'

const FiltersMenu = (props) => {
  const { toggle, setIsLoading } = props
  const { categoryId } = useParams()

  const dispatch = useDispatch()

  const category = useSelector(
    (state) => state.category.categories?.[categoryId],
  )

  const [brands, setBrands] = useState([])
  const [gender, setGender] = useState([])
  const [sizes, setSizes] = useState([])
  const [colors, setColors] = useState([])
  const [type, setType] = useState([])
  const [releaseYear, setReleaseYear] = useState([])
  const [minPrice, setMinPrice] = useState()
  const [maxPrice, setMaxPrice] = useState()

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
          setCategoryProducts({ categoryId: params.Categories, products }),
        )
      }
      setIsLoading(false)
    },
    [dispatch, setIsLoading],
  )

  const fetchFilteredProducts = useMemo(() => {
    return debounce(() => {
      let params = { Categories: categoryId }
      if (brands.length) {
        params.brands = brands.join(',')
      }
      if (gender.length) {
        params.gender = gender.join(',')
      }
      if (sizes.length) {
        params.sizes = sizes.join(',')
      }
      if (colors.length) {
        params.colors = colors.join(',')
      }
      if (type.length) {
        params.type = type.join(',')
      }
      if (releaseYear.length) {
        params.releaseYear = releaseYear.join(',')
      }
      if (minPrice) {
        params.minPrice = minPrice
      }
      if (maxPrice) {
        params.maxPrice = maxPrice
      }
      getCategoryProuductsData(params)
    }, 1000)
  }, [
    categoryId,
    brands,
    gender,
    sizes,
    colors,
    type,
    releaseYear,
    minPrice,
    maxPrice,
    getCategoryProuductsData,
  ])

  useEffect(() => {
    fetchFilteredProducts()
    return () => {
      fetchFilteredProducts.cancel()
    }
  }, [brands, fetchFilteredProducts])

  return (
    <div className="absolute laptop:relative bg-white flex flex-col w-full z-10">
      <div className="p-6 laptop:pl-10 laptop:pr-0">
        <div className="flex items-center gap-6 pb-5">
          <button onClick={toggle} className="laptop:hidden">
            <ArrowSVG />
          </button>
          <p className="font-bold text-xl uppercase laptop:normal-case">
            Filters
          </p>
        </div>
        <div className="flex flex-col gap-6 pt-4">
          <CategoryFilter />
          {category?.brands && (
            <BrandFilter
              {...{ brands, setBrands, brandList: category?.brands }}
            />
          )}
          <GenderFilter {...{ gender, setGender }} />
          {category?.sizes && (
            <SizeFilter {...{ sizes, setSizes, sizeList: category?.sizes }} />
          )}
          {category?.colors && (
            <ColorFilter
              {...{ colors, setColors, colorList: category?.colors }}
            />
          )}
          {category?.types && (
            <TypeFilter {...{ type, setType, typeList: category?.types }} />
          )}
          <RealeaseYearFilter {...{ releaseYear, setReleaseYear }} />
          <PriceFilter {...{ minPrice, setMinPrice, maxPrice, setMaxPrice }} />
        </div>
      </div>
      {/* <div className="flex flex-row items-center border divide-x text-center laptop:hidden">
        <button
          className="flex flex-grow px-2.5 py-4 items-center justify-center"
          onClick={toggle}
        >
          <p className="font-bold text-13">Cancel</p>
        </button>
        <button className="flex flex-grow px-2.5 py-4 items-center justify-center bg-punchy-neon">
          <p className="font-bold text-13">Apply</p>
        </button>
      </div> */}
    </div>
  )
}

export default FiltersMenu

import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import air_Jordan_image from '../assets/img/air_jordan.png'
import the_only from '../assets/img/the_only.png'
import collectxn_focused_woman from '../assets/img/collectxn_focused_woman.png'
import style_for_men from '../assets/img/style_for_men.png'
import fashion_for_women from '../assets/img/fashion_for_women.png'
import style_fashion_men_women from '../assets/img/style_fashion_men_women.png'
import explore_collectxn from '../assets/img/explore_collectxn.png'
import happy_customers from '../assets/img/happy_customers.png'
import trusted_suppliers from '../assets/img/trusted_suppliers.png'
import unique_collection from '../assets/img/unique_collection.png'

// import { ReactComponent as HappyCustomers } from '../assets/svg/happy_customers.svg'
import { ReactComponent as ScrollToExplore } from '../assets/svg/scroll_to_explore.svg'
// import { ReactComponent as TrustedSuppliers } from '../assets/svg/trusted_suppliers.svg'
// import { ReactComponent as UniqueCollection } from '../assets/svg/unique_collection.svg'
import PopButton from '../components/buttons/PopButton'

import Crawler from '../components/Crawler'
// import ExploreSneakers from '../components/Explore/ExploreSneakers'
// import ExploreApparels from '../components/Explore/ExploreApparels'
// import ExploreJewellary from '../components/Explore/ExploreJewellary'
// import ExploreAssecersories from '../components/Explore/ExploreAssecersories'
// import ExplorePlaystation from '../components/Explore/ExplorePlaystation'
import RequestProductBanner from '../components/Banners/RequestProductBanner'
import TrendingBrandsBanner from '../components/Banners/TrendingBrandsBanner'
import UserReviewsBanner from '../components/Banners/UserReviewsBanner'
import FromTheMagazineBanner from '../components/Banners/FromTheMagazineBanner'
import NewsletterBanner from '../components/Banners/NewsletterBanner'
import BecomeACollectxrBanner from '../components/Banners/BecomeACollectxrBanner'
import PopularRightNow from '../components/Banners/PopularRightNow'
import { getAllProducts } from '../api/products.api'
import { setProducts } from '../features/product/productSlice'
import ExploreCategory from '../components/Explore/ExploreCategory'
import UserReviewCarousel from '../components/Carousel/UserReviewCarousel'
import { Carousel } from 'react-responsive-carousel'

const Home = () => {
  const dispatch = useDispatch()

  const { categories } = useSelector((state) => state.category)

  const getAllProuductsData = useCallback(async () => {
    const res = await getAllProducts()
    const productList = res?.data?.products
    if (productList) {
      let products = {}
      productList.forEach((product) => {
        products[product.id] = product
      })
      dispatch(setProducts(products))
    }
  }, [dispatch])

  useEffect(() => {
    getAllProuductsData()
  }, [getAllProuductsData])

  return (
    <div className="overflow-auto no-scrollbar">
      <div className="bg-black-mate text-white bg-[url('/src/assets/img/gird_pattern.png')] bg-con">
        <div className="pt-[14px] tablet:pt-6 laptop:pt-9 px-4 tablet:px-8 laptop:px-20">
          <div>
            <Carousel
              statusFormatter={() => {}}
              infiniteLoop
              showThumbs={false}
            >
              <img
                src={air_Jordan_image}
                alt="air_Jordan_image"
                className="w-full"
              />
              <img
                src={air_Jordan_image}
                alt="air_Jordan_image"
                className="w-full"
              />
              <img
                src={air_Jordan_image}
                alt="air_Jordan_image"
                className="w-full"
              />
              <img
                src={air_Jordan_image}
                alt="air_Jordan_image"
                className="w-full"
              />
            </Carousel>
          </div>

          <div className="flex items-center justify-between py-1/20">
            <div className="">
              <img src={the_only} alt="the_only" />
            </div>
            <div className="">
              <ScrollToExplore />
            </div>
          </div>
        </div>
        <Crawler />
      </div>
      <div className="bg-white overflow-auto no-scrollbar relative">
        <div className="relative bg-[#F1F1F1] pl-4 pr-8 pt-13 pb-37 tablet:rounded-2xl tablet:mt-12 laptop:mt-24 tablet:mb-32 tablet:ml-1/20 tablet:w-2/3 tablet:pt-6 laptop:pt-12 tablet:pb-7 laptop:pb-20 tablet:pl-8 laptop:pl-16 mb-42 bg-[url('/src/assets/img/grid_chex_gray.png')]">
          <div className="flex flex-col gap-7 tablet:gap-2">
            <div className="flex flex-col gap-5 tablet:gap-7 tablet:max-w-[70%]">
              <p className="font-bold text-2xl tablet:text-31 laptop:text-6xl ">
                Collectxn Focused on Providing Collectables In Best way
              </p>
              <p className="font-cera-pro text-xs tablet:text-13 laptop:text-2xl max-w-lg">
                One of the leading retailers in premium sports footware and
                apparel in India, which caters to sneaker enthusiasts.
              </p>
            </div>
            <div className="flex gap-6 tablet:gap-8 mt-5 font-cera-pro font-medium text-10 laptop:text-base text-black text-center tablet:max-w-[70%]">
              <div className="flex flex-col gap-1 tablet:gap-2 items-center w-28 tablet:w-36">
                {/* <TrustedSuppliers /> */}
                <img
                  src={trusted_suppliers}
                  alt="trusted_suppliers"
                  className="max-w-[64px] laptop:max-w-[112px]"
                />
                <p className="">Trusted Suppliers</p>
              </div>
              <div className="flex flex-col gap-1 tablet:gap-2 items-center w-28 tablet:w-36">
                {/* <UniqueCollection /> */}
                <img
                  src={unique_collection}
                  alt="unique_collection"
                  className="max-w-[64px] laptop:max-w-[112px]"
                />
                <p className="">Unique Collection</p>
              </div>
              <div className="flex flex-col gap-1 tablet:gap-2 items-center w-28 tablet:w-36">
                {/* <HappyCustomers /> */}
                <img
                  src={happy_customers}
                  alt="happy_customers"
                  className="max-w-[64px] laptop:max-w-[112px]"
                />
                <p className="">5000+ Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="w-min whitespace-nowrap mt-12 tablet:mt-8">
            <PopButton variant="outline">About us</PopButton>
          </div>
          <div className="absolute max-w-[70%] right-1 -bottom-3/10 tablet:-right-[30%] tablet:top-0 tablet:w-3/5 laptop:w-auto flex tablet:h-full">
            <img
              src={collectxn_focused_woman}
              alt="collectxn_focused"
              className="object-contain"
            />
          </div>
        </div>
        <PopularRightNow />
      </div>
      <div className="bg-black-mate p-1/20 flex flex-col tablet:flex-row relative bg-[url('/src/assets/img/mask_group.png')] bg-no-repeat bg-right-bottom bg-contain gap-8">
        <div className="flex flex-col gap-6 tablet:gap-[10%] tablet:w-1/2">
          <div className="tablet:mr-[8%]">
            <img
              src={style_for_men}
              alt="style_for_men"
              className="rounded-xl hover:shadow-men"
            />
          </div>
          <div className="tablet:ml-[8%]">
            <img
              src={fashion_for_women}
              alt="fashion_for_women"
              className="rounded-xl hover:shadow-women"
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-0">
            <img src={explore_collectxn} alt="explore_collectxn" />
          </div>
          <div>
            <img src={style_fashion_men_women} alt="style_fashion_men_women" />
          </div>
        </div>
      </div>
      <div className="bg-white p-1/20">
        <div className="flex flex-col gap-12">
          <div className="font-cera-pro font-bold text-xl laptop:text-3xl">
            Explore Various Categories
          </div>
          <div className="flex flex-col gap-12 pb-16">
            {Object.entries(categories).map(([categoryId, category]) => {
              return <ExploreCategory key={categoryId} category={category} />
            })}
            {/* <ExploreSneakers />
            <ExploreApparels />
            <ExploreJewellary />
            <ExplorePlaystation />
            <ExploreAssecersories /> */}
          </div>
        </div>
      </div>
      <RequestProductBanner />
      <TrendingBrandsBanner />
      <UserReviewsBanner />
      <FromTheMagazineBanner />
      <UserReviewCarousel />
      <NewsletterBanner />
      <BecomeACollectxrBanner />
    </div>
  )
}

export default Home

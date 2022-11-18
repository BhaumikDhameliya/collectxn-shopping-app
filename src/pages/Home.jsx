import React from 'react'

import air_Jordan_image from '../assets/img/air_jordan.png'
import the_only from '../assets/img/the_only.png'
import collectxn_focused from '../assets/img/collectxn_focused.png'
import collectxn_focused_purple_line from '../assets/img/collectxn_focused_purple_line.png'
import style_for_men from '../assets/img/style_for_men.png'
import fashion_for_women from '../assets/img/fashion_for_women.png'
import style_fashion_men_women from '../assets/img/style_fashion_men_women.png'
import explore_collectxn from '../assets/img/explore_collectxn.png'
import mask_group from '../assets/img/mask_group.png'

import { ReactComponent as HappyCustomers } from '../assets/svg/happy_customers.svg'
import { ReactComponent as ScrollToExplore } from '../assets/svg/scroll_to_explore.svg'
import { ReactComponent as TrustedSuppliers } from '../assets/svg/trusted_suppliers.svg'
import { ReactComponent as UniqueCollection } from '../assets/svg/unique_collection.svg'
import { ReactComponent as Arrow } from '../assets/svg/arrow.svg'
import PopButton from '../components/buttons/PopButton'

import Crawler from '../components/Crawler'
import ProductCard from '../components/Card/ProductCard'

const Home = () => {
  return (
    <>
      <div className="bg-black-mate text-white bg-[url('/src/assets/img/gird_pattern.png')] pt-[124px] px-20">
        <div>
          <div>
            <img
              src={air_Jordan_image}
              alt="air_Jordan_image"
              className="w-full"
            />
          </div>
          <div className="absolute bottom-1/10 right-1/10">
            <ScrollToExplore />
          </div>
          <div className="mt-11 pb-16">
            <img src={the_only} alt="the_only" />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="relative bg-[#F1F1F1] rounded-2xl mt-24 mb-32 ml-[5%] w-2/3 pt-12 pb-20 pl-16">
          <div className="flex flex-col gap-7 max-w-[70%]">
            <p className="font-bold text-6xl ">
              Collectxn Focused on Providing Collectables In Best way
            </p>
            <p className="font-cera-pro text-2xl max-w-lg">
              One of the leading retailers in premium sports footware and
              apparel in India, which caters to sneaker enthusiasts.
            </p>
          </div>
          <div className="flex gap-8 mt-5 font-cera-pro font-medium text-base text-black">
            <div className="flex flex-col gap-2 items-center">
              <TrustedSuppliers />
              <p className="">Trusted Suppliers</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <UniqueCollection />
              <p className="">Unique Collection</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <HappyCustomers />
              <p className="">5000+ Happy Customers</p>
            </div>
          </div>
          <div className="w-min whitespace-nowrap mt-12">
            <PopButton type="outline">About us</PopButton>
          </div>
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
            <img
              src={collectxn_focused_purple_line}
              alt="collectxn_focused_purple_line"
            />
          </div>
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
            <img src={collectxn_focused} alt="collectxn_focused" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 px-[5%]">
          <div className="flex justify-between items-center w-full">
            <div className="font-cera-pro font-bold text-2xl ">
              Popular Right Now
            </div>
            <div className="flex gap-3 ">
              <div className="p-2 border border-black-mate rounded-full">
                <Arrow />
              </div>
              <div className="p-2 border border-black-mate rounded-full rotate-180">
                <Arrow />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 overflow-x-scroll no-scrollbar pb-[5%]">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
      <div className="bg-black-mate p-[5%] flex relative">
        <div className="flex flex-col gap-[10%] w-1/2">
          <div className="mr-[8%]">
            <img src={style_for_men} alt="style_for_men" />
          </div>
          <div className="ml-[8%]">
            <img src={fashion_for_women} alt="fashion_for_women" />
          </div>
        </div>

        <div className="absolute bottom-0 right-0">
          <img src={mask_group} alt="mask_group" />
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

      <Crawler />
    </>
  )
}

export default Home

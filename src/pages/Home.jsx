import React from 'react'

// import air_Jordan_image from '../assets/img/air_jordan.png'
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
import ExploreSneakers from '../components/Explore/ExploreSneakers'
import ExploreApparels from '../components/Explore/ExploreApparels'
import ExploreJewellary from '../components/Explore/ExploreJewellary'
import ExploreAssecersories from '../components/Explore/ExploreAssecersories'
import RequestProductBanner from '../components/Banners/RequestProductBanner'
import TrendingBrandsBanner from '../components/Banners/TrendingBrandsBanner'
import UserReviewsBanner from '../components/Banners/UserReviewsBanner'
import FromTheMagazineBanner from '../components/Banners/FromTheMagazineBanner'
import NewsletterBanner from '../components/Banners/NewsletterBanner'
import BecomeACollectxrBanner from '../components/Banners/BecomeACollectxrBanner'
import ExplorePlaystation from '../components/Explore/ExplorePlaystation'
import PopularRightNow from '../components/Banners/PopularRightNow'

const Home = () => {
  return (
    <div className="overflow-auto no-scrollbar">
      <div className="bg-black-mate text-white bg-[url('/src/assets/img/gird_pattern.png')] bg-con">
        <div className="pt-[14px] tablet:pt-6 laptop:pt-9 px-4 tablet:px-8 laptop:px-20">
          <div>
            <div
              id="carouselExampleCaptions"
              className="carousel slide relative"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                    className="block w-full"
                    alt="..."
                  />
                  <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-xl">First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                    className="block w-full"
                    alt="..."
                  />
                  <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-xl">Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                    className="block w-full"
                    alt="..."
                  />
                  <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-xl">Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* <img
              src={air_Jordan_image}
              alt="air_Jordan_image"
              className="w-full"
            /> */}
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
        <div className="relative bg-[#F1F1F1] pl-4 pr-8 pt-13 pb-37 tablet:rounded-2xl tablet:mt-12 laptop:mt-24 tablet:mb-32 tablet:ml-1/20 tablet:w-2/3 tablet:pt-6 laptop:pt-12 tablet:pb-7 laptop:pb-20 tablet:pl-8 laptop:pl-16 mb-42">
          <div className="flex flex-col gap-7 tablet:gap-2">
            <div className="flex flex-col gap-5 tablet:gap-7 tablet:max-w-[70%]">
              <p className="font-bold text-2xl tablet:text-31 laptop:text-6xl ">
                Collectxn Focused on Providing Collectables In Best way
              </p>
              <p className="font-cera-pro text-xs tablet:text-13 laptop:text-2xl max-w-lg font-semibold tablet:font-medium">
                One of the leading retailers in premium sports footware and
                apparel in India, which caters to sneaker enthusiasts.
              </p>
            </div>
            <div className="flex gap-6 tablet:gap-8 mt-5 font-cera-pro font-semibold text-xs tablet:text-base text-black text-center">
              <div className="flex flex-col gap-1 tablet:gap-2 items-center w-16">
                {/* <TrustedSuppliers /> */}
                <img src={trusted_suppliers} alt="trusted_suppliers" />
                <p className="">Trusted Suppliers</p>
              </div>
              <div className="flex flex-col gap-1 tablet:gap-2 items-center w-16">
                {/* <UniqueCollection /> */}
                <img src={unique_collection} alt="unique_collection" />
                <p className="">Unique Collection</p>
              </div>
              <div className="flex flex-col gap-1 tablet:gap-2 items-center w-16">
                {/* <HappyCustomers /> */}
                <img src={happy_customers} alt="happy_customers" />
                <p className="">5000+ Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="w-min whitespace-nowrap mt-12 tablet:mt-8">
            <PopButton type="outline">About us</PopButton>
          </div>
          <div className="absolute max-w-[70%] right-1 -bottom-1/5 tablet:-right-[30%] tablet:w-3/5 tablet:-bottom-1/10 laptop:w-auto">
            <img src={collectxn_focused_woman} alt="collectxn_focused" />
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
            <ExploreSneakers />
            <ExploreApparels />
            <ExploreJewellary />
            <ExplorePlaystation />
            <ExploreAssecersories />
          </div>
        </div>
      </div>
      <RequestProductBanner />
      <TrendingBrandsBanner />
      <UserReviewsBanner />
      <FromTheMagazineBanner />
      <NewsletterBanner />
      <BecomeACollectxrBanner />
    </div>
  )
}

export default Home

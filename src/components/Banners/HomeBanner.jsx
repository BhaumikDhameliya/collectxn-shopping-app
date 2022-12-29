import React from 'react'

// import air_Jordan_image from '../../assets/img/air_jordan.png'
import home_banner_cxn_logo from '../../assets/svg/homepage/banner/home_banner_cxn_logo.svg'
import home_banner_two_sitting_girls from '../../assets/svg/homepage/banner/home_banner_two_sitting_girls.svg'

const HomeBanner = () => {
  return (
    <div className="border border-white rounded tablet:rounded-lg laptop:rounded-2xl p-4 tablet:p-0 bg-[#1A1919] flex justify-between flex-col tablet:flex-row">
      <div className="flex items-center justify-center flex-col font-bold text-[32px] tablet:text-5xl md:text-6xl lg:text-7xl xl:text-[112px] text-punchy-neon tablet:ml-9 tablet:mt-20 tablet:mb-32 laptop:ml-16 xl:mt-24 xl:mb-48 whitespace-nowrap">
        <p>Air Jordan</p>
        <p>XXXVI Low</p>
      </div>
      <div className="py-12 tablet:py-0 flex items-center justify-center w-full">
        <div className="bg-[url('/src/assets/svg/homepage/banner/home_banner_star_full.svg')] bg-no-repeat bg-center bg-contain min-h-[268px] flex items-center justify-center tablet:justify-end tablet:bg-[url('/src/assets/svg/homepage/banner/home_banner_star_half.svg')] tablet:bg-right tablet:rounded-r-lg laptop:rounded-r-2xl tablet:flex-grow h-full">
          <img
            src={home_banner_two_sitting_girls}
            alt=""
            className="max-h-44 tablet:max-h-64 laptop:max-h-[473px]"
            style={{ width: 'auto' }}
          />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 tablet:bottom-9 tablet:left-9 laptop:bottom-16 laptop:left-16">
        {/* <img src={home_banner_star_full} alt="" /> */}
        <img
          src={home_banner_cxn_logo}
          alt="cxn"
          className="max-h-5 mix-blend-screen tablet:max-h-9 laptop:max-h-[70px]"
        />
      </div>
    </div>
  )
}

export default HomeBanner

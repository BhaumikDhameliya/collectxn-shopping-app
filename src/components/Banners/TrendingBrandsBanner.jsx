import React from 'react'

import logo_adidas from '../../assets/svg/trending_brands/logo_adidas.svg'
import logo_nike from '../../assets/svg/trending_brands/logo_nike.svg'
import logo_puma from '../../assets/svg/trending_brands/logo_puma.svg'
import logo_the_north_face from '../../assets/svg/trending_brands/logo_the_north_face.svg'
import logo_tommy_hilfiger from '../../assets/svg/trending_brands/logo_tommy_hilfiger.svg'
import trending_text from '../../assets/svg/trending_brands/trending_text.svg'

const TrendingBrandsBanner = () => {
  return (
    <div className="bg-black-mate bg-[url('/src/assets/img/trending_brands_mask_group.png')] bg-no-repeat bg-bottom bg-contain">
      <div className="flex flex-col gap-5 items-center content-center p-16 tablet:px-24 text-center">
        <div className="relative flex items-center justify-center">
          <img src={trending_text} alt="#trending" className="" />
          <div className="absolute bottom-0 m-auto">
            <p className="font-bold text-2xl text-white whitespace-nowrap tablet:text-5xl">
              TRENDING BRANDS
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center bg-black-mate border border-gray-light rounded-10 p-4 gap-6 mx-3">
          <div>
            <img
              src={logo_nike}
              alt="nike"
              className="max-w-[74px] tablet:max-w-[128px]"
            />
          </div>
          <div>
            <img
              src={logo_adidas}
              alt="adidas"
              className="max-w-[74px] tablet:max-w-[128px]"
            />
          </div>
          <div>
            <img
              src={logo_puma}
              alt="puma"
              className="max-w-[74px] tablet:max-w-[128px]"
            />
          </div>
          <div>
            <img
              src={logo_the_north_face}
              alt="the north face"
              className="max-w-[74px] tablet:max-w-[128px]"
            />
          </div>
          <div>
            <img
              src={logo_tommy_hilfiger}
              alt="tommy hilfiger"
              className="max-w-[74px] tablet:max-w-[128px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingBrandsBanner

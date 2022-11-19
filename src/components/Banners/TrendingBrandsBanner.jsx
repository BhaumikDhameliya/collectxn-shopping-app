import React from 'react'

import trending_brands_banner from '../../assets/img/trending_brands_banner.png'
const TrendingBrandsBanner = () => {
  return (
    <div className="bg-black-mate bg-[url('/src/assets/img/trending_brands_mask_group.png')] bg-no-repeat bg-bottom">
      <div className="p-1/10 grid items-center content-center">
        <img src={trending_brands_banner} alt="trending_brands_banner" />
      </div>
    </div>
  )
}

export default TrendingBrandsBanner

import React from 'react'

import img_cooming_soon_laptop from '../assets/img/img_coming_soon_laptop.png'
import img_cooming_soon_tablet from '../assets/img/img_coming_soon_tablet.png'
import img_cooming_soon_mobile from '../assets/img/img_coming_soon_mobile.png'

const CoomingSoon = () => {
  return (
    <div className='h-screen'>
      {/* <div className='hidden laptop:block'>laptop</div>
      <div className='hidden tablet:max-laptop:block'>tablet</div>
      <div className='block tablet:hidden'>Mobile</div> */}
      <img src={img_cooming_soon_laptop} alt="cooming soon" className='hidden laptop:block h-full w-full' />
      <img src={img_cooming_soon_tablet} alt="cooming soon" className='hidden tablet:max-laptop:block h-full w-full'/>
      <img src={img_cooming_soon_mobile} alt="cooming soon" className='block tablet:hidden h-full w-full'/>
    </div>
  )
}

export default CoomingSoon
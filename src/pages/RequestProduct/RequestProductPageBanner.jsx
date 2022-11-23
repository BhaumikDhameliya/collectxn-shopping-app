import React from 'react'

import request_product_banner from '../../assets/img/request_product/request_product_banner.png'
import request_product_sticker from '../../assets/img/request_product/request_product_sticker.png'
import request_product_text from '../../assets/img/request_product/request_product_text.png'

const RequestProductPageBanner = () => {
  return (
    <div className="bg-purple relative bg-[url('/src/assets/img/mask_group.png')] bg-no-repeat bg-right-bottom bg-contain overflow-hidden tablet:overflow-visible">
      <div className="px-1/20 py-1/10 pr-8">
        <div className="flex">
          <div>
            <img src={request_product_text} alt="request_product_text" />
          </div>
          <div className="grid items-end">
            <img src={request_product_sticker} alt="request_product_sticker" />
          </div>
        </div>
        <div className="mt-1/10">
          <p className="text-13 font-normal laptop:text-2xl text-white font-cera-pro">
            Just tell us which product you are looking for we try our best to
            deliver that.
          </p>
        </div>
      </div>
      <div className="pointer-events-none">
        <img src={request_product_banner} alt="request_product_banner" />
      </div>
    </div>
  )
}

export default RequestProductPageBanner

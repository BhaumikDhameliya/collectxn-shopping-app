import React from 'react'

import request_product_banner from '../../assets/img/request_product/request_product_banner.png'
import request_product_sticker from '../../assets/img/request_product/request_product_sticker.png'
import request_product_text from '../../assets/img/request_product/request_product_text.png'

import PopButton from '../buttons/PopButton'

const RequestProductBanner = () => {
  return (
    <div className="bg-purple relative bg-[url('/src/assets/img/request_product/request_product_mask_group.png')] bg-no-repeat bg-right-top">
      <div className="px-1/20 py-1/10 w-1/2">
        <div className="flex">
          <div>
            <img src={request_product_text} alt="request_product_text" />
          </div>
          <div className="grid items-end">
            <img src={request_product_sticker} alt="request_product_sticker" />
          </div>
        </div>
        <div className="mt-1/10">
          <p className="text-2xl text-white font-cera-pro">
            Just tell us which product you are looking for we try our best to
            deliver that.
          </p>
        </div>
        <div className="w-1/3 mt-1/10">
          <PopButton type="outline">Make Request</PopButton>
        </div>
      </div>
      <div className="absolute -top-1/10 right-0 ">
        <img src={request_product_banner} alt="request_product_banner" />
      </div>
    </div>
  )
}

export default RequestProductBanner

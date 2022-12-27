import React from 'react'
import { Link } from 'react-router-dom'

import request_product_banner from '../../assets/svg/request_product/request_product_banner.svg'
import request_product_sticker from '../../assets/svg/request_product/request_product_sticker.svg'
import request_product_text from '../../assets/svg/request_product/request_product_text.svg'

import PopButton from '../buttons/PopButton'

const RequestProductBanner = () => {
  return (
    <div className="bg-purple relative bg-[url('/src/assets/img/request_product/request_product_mask_group.png')] bg-no-repeat bg-right-top bg-contain overflow-hidden tablet:overflow-visible">
      <div className="px-1/20 py-1/10 tablet:w-1/2 pr-8">
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
        <div className="w-1/3 mt-1/10 whitespace-nowrap">
          <PopButton variant="outline">
            <Link to="/request-product">Make Request</Link>
          </PopButton>
        </div>
      </div>
      <div className="relative tablet:absolute -top-16 -right-10 tablet:-top-1/10 tablet:right-0 pointer-events-none">
        <img src={request_product_banner} alt="request_product_banner" />
      </div>
    </div>
  )
}

export default RequestProductBanner

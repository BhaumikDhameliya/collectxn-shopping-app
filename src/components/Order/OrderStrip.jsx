import React from 'react'

import DeliveredSVG from '../../assets/svg/order_strip/Delivered.svg'
import air_max from '../../assets/img/air_max_flyknit_racer_shoes.png'
import PopButton from '../buttons/PopButton'
import { ChevronDown } from 'akar-icons'

const OrderStrip = () => {
  return (
    <div className="flex flex-col divide-y rounded-10 border">
      <div className="flex justify-center items-center p-4 gap-5 bg-green text-white rounded-t-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-5">
            <div>
              <img src={DeliveredSVG} alt={DeliveredSVG} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold">Delivered</span>
              <span className="font-medium text-10">On Mon, 19 Sep</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 font-bold text-10">
            <p>Order Placed on: 17 July 2022</p>
            <p>Order ID - CXN-22633-54954152</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 gap-4 ">
        <div className="flex items-center gap-4 w-full">
          <div>
            <img src={air_max} alt={air_max} className="h-24" />
          </div>
          <div className="flex flex-col justify-between gap-4 text-13 font-medium">
            <div className="flex flex-col gap-1.5">
              <div className="font-bold">Air Max Flyknit Racer</div>
              <div className="font-medium text-gray-mid">Nike</div>
            </div>

            <div>Qty: 01</div>
            <div>Size: UK 9.5</div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3 w-full">
          <PopButton btnClasses="bg-black-mate">Give your feedback</PopButton>
          <PopButton type="outline">Cancel order</PopButton>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="text-13">See Details</button>
          <div>
            <ChevronDown strokeWidth={2} size={16} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderStrip

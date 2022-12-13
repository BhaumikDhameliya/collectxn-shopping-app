import React from 'react'
import PopButton from '../../components/buttons/PopButton'
import OrderStrip from '../../components/Order/OrderStrip'

const ProfileOrders = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-31 hidden laptop:block">Orders</p>
        <div className="flex gap-4 w-min">
          <PopButton btnClasses="bg-black-mate">All</PopButton>
          <PopButton type="outline">Running</PopButton>
          <PopButton type="outline">History</PopButton>
          <PopButton type="outline">Cancel</PopButton>
        </div>
      </div>
      <OrderStrip />
      <OrderStrip />
      <OrderStrip />
    </div>
  )
}

export default ProfileOrders

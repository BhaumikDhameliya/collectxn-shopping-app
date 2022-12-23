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
          <PopButton variant="outline">Running</PopButton>
          <PopButton variant="outline">History</PopButton>
          <PopButton variant="outline">Cancel</PopButton>
        </div>
      </div>
      <OrderStrip />
      <OrderStrip />
      <OrderStrip />
    </div>
  )
}

export default ProfileOrders

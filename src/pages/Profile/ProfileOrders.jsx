import React from 'react'
import OrderStrip from '../../components/Order/OrderStrip'

const ProfileOrders = () => {
  return (
    <div className="flex flex-col gap-5">
      <OrderStrip />
      <OrderStrip />
      <OrderStrip />
    </div>
  )
}

export default ProfileOrders

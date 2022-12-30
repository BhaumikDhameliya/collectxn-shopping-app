import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../api/order.api'

import PopButton from '../../components/buttons/PopButton'
import OrderStrip from '../../components/Order/OrderStrip'
import { setUserOrders } from '../../features/user/userSlice'

const ProfileOrders = () => {
  const dispatch = useDispatch()

  const userProfile = useSelector((state) => state.user.profile)
  const orderList = useSelector((state) => state.user.orders)

  const getOrdersData = useCallback(async () => {
    const orderRes = await getOrders()
    const orderData = orderRes?.data?.orders
    if (orderData) {
      dispatch(setUserOrders(orderData))
    }
  }, [dispatch])

  useEffect(() => {
    if (Object.keys(userProfile || {})?.length) {
      getOrdersData()
    }
  }, [getOrdersData, userProfile])

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
      {orderList?.map((order) => {
        return <OrderStrip order={order} key={order.id} />
      })}
    </div>
  )
}

export default ProfileOrders

import { toast } from 'react-toastify'

import { createSingleOrder, placeOrdersFromCart } from '../../api/razorpay.api'
import { displayRazorpay } from '../razorpay/razorpay.utils'

const generatePaymentOptionFromRes = (data) => {
  const options = {
    key: data?.RAZORPAY_KEY_ID,
    currency: data?.order?.currency,
    amount: data?.order?.amount,
    order_id: data?.order?.id,
    name: 'Collection',
    description: 'Thank you for shopping.',
    notes: data?.order?.notes,

    handler: function (response) {
      console.log('res from handler\n', response)
      window.location.replace('/order-placed')
    },
  }
  return options
}

export const handlePlaceOrderFromCart = async () => {
  const res = await placeOrdersFromCart()
  if (res.status !== 200) {
    toast.error('Failed to place order')
    return res
  }
  const options = generatePaymentOptionFromRes(res?.data)
  await displayRazorpay(options)
  return res
}

export const handlePlaceSingleOrder = async (productId, payload) => {
  const res = await createSingleOrder(productId, payload)
  if (res.status !== 200) {
    toast.error('Failed to place order')
    return res
  }
  const options = generatePaymentOptionFromRes(res?.data)
  await displayRazorpay(options)
  return res
}

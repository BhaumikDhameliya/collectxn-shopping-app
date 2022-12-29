import { collectionAPI } from '../utils/axios/axios.utils'

export const placeOrdersFromCart = async (payload) => {
  try {
    const res = await collectionAPI.post('/razorpay/orders/carts', payload)
    console.log('res-----', res?.data)
    return res?.data
  } catch (error) {
    const errorRes = error?.response?.data
    if (errorRes) {
      console.log('error-----', errorRes)
      return errorRes
    }
  }
}

export const createSingleOrder = async (productId, payload) => {
  try {
    const res = await collectionAPI.post(
      `/razorpay/orders/products/${productId}`,
      payload,
    )
    console.log('res-----', res)
    return res?.data
  } catch (error) {
    const errorRes = error?.response?.data
    if (errorRes) {
      console.log('error-----', errorRes)
      return errorRes
    }
  }
}

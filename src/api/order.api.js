import { collectionAPI } from '../utils/axios/axios.utils'

export const getOrders = async (params) => {
  try {
    const res = await collectionAPI.get('/orders', { params })
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

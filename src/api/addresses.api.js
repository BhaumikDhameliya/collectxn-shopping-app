import { collectionAPI } from '../utils/axios/axios.utils'

export const createAddress = async (payload) => {
  try {
    const res = await collectionAPI.post('/addresses', payload)
    console.log('res-----', res)
    return res?.data
  } catch (error) {
    console.log('error-----', error)
  }
}

export const updateAddress = async (addressId, payload) => {
  try {
    const res = await collectionAPI.patch(`/addresses/${addressId}`, payload)
    console.log('res-----', res)
    return res?.data
  } catch (error) {
    console.log('error-----', error)
  }
}

export const deleteAddress = async (addressId, payload) => {
  try {
    const res = await collectionAPI.delete(`/addresses/${addressId}`, payload)
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

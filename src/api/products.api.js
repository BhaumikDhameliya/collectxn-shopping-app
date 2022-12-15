import { collectionAPI } from '../utils/axios/axios.utils'

export const createProducts = async (payload) => {
  try {
    const res = await collectionAPI.post('/products', payload)
    console.log('res-----', res)
    return res?.data
  } catch (error) {
    console.log('error-----', error)
  }
}

export const getAllProducts = async (params) => {
  try {
    const res = await collectionAPI.get('/products', { params })
    console.log('res-----', res)
    return res?.data
  } catch (error) {
    console.log('error-----', error)
  }
}

export const getProductDetails = async (productId, params) => {
  try {
    const res = await collectionAPI.get(`/products/id/${productId}`, { params })
    console.log('res-----', res)
    return res?.data
  } catch (error) {
    console.log('error-----', error)
  }
}

export const getRelatedProductDetails = async (params) => {
  try {
    const res = await collectionAPI.get(`/products/related`, { params })
    console.log('res-----', res)
    return res?.data
  } catch (error) {
    console.log('error-----', error)
  }
}

export const updateProducts = async (payload) => {
  try {
    const res = await collectionAPI.patch('/products', payload)
    console.log('res-----', res)
    return res?.data
  } catch (error) {
    console.log('error-----', error)
  }
}

export const deleteProducts = async (payload) => {
  try {
    const res = await collectionAPI.delete('/products', payload)
    console.log('res-----', res)
    return res?.data
  } catch (error) {
    console.log('error-----', error)
  }
}

export const likeProduct = async (payload, params) => {
  try {
    const res = await collectionAPI.post('/products/like', payload, { params })
    console.log('res-----', res)
    return res?.data
  } catch (error) {
    console.log('error-----', error)
  }
}

export const getLikedProducts = async (params) => {
  try {
    const res = await collectionAPI.get('/products/like', { params })
    console.log('res-----', res)
    return res?.data
  } catch (error) {
    console.log('error-----', error)
  }
}

export const removeLikedProduct = async (payload, params) => {
  try {
    const res = await collectionAPI.delete('/products/like', payload, {
      params,
    })
    console.log('res-----', res)
    return res?.data
  } catch (error) {
    console.log('error-----', error)
  }
}

export const getSearchedProducts = async (params) => {
  try {
    const res = await collectionAPI.get('/products/search', { params })
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

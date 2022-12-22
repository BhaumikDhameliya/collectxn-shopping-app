import { collectionAPI } from '../utils/axios/axios.utils'

export const createUser = async (payload) => {
  try {
    const res = await collectionAPI.post('/user', payload)
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

export const getUser = async (payload) => {
  try {
    const res = await collectionAPI.get('/user', payload)
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

export const getUserProfile = async (payload) => {
  try {
    const res = await collectionAPI.get('/users/profile', payload)
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

export const updateUser = async (payload) => {
  try {
    const res = await collectionAPI.patch('/user', payload)
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

export const deleteUser = async (payload) => {
  try {
    const res = await collectionAPI.delete('/user', payload)
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

export const updateMobile = async (payload) => {
  try {
    const res = await collectionAPI.patch('/users/mobile', payload)
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

export const sendOTPToChangeEmail = async (payload) => {
  try {
    const res = await collectionAPI.post('/users/email/OTP', payload)
    console.log('res-----', res)
    let authToken = res?.data?.token
    if (authToken) {
      authToken = `Bearer ${authToken}`
      localStorage.setItem('authToken', authToken)
      collectionAPI.defaults.headers.common['Authorization'] = authToken
    }
    return res?.data
  } catch (error) {
    const errorRes = error?.response?.data
    if (errorRes) {
      console.log('error-----', errorRes)
      return errorRes
    }
  }
}

export const verifyOTPAndChangeEmail = async (payload) => {
  try {
    const res = await collectionAPI.patch('/users/email', payload)
    console.log('res-----', res)
    let authToken = res?.data?.token
    if (authToken) {
      authToken = `Bearer ${authToken}`
      localStorage.setItem('authToken', authToken)
      collectionAPI.defaults.headers.common['Authorization'] = authToken
    }
    return res?.data
  } catch (error) {
    const errorRes = error?.response?.data
    if (errorRes) {
      console.log('error-----', errorRes)
      return errorRes
    }
  }
}

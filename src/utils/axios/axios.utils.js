import axios from 'axios'
import { BASE_URL } from '../../config/constants'

export const collectionAPI = axios.create({
  baseURL: BASE_URL,
})

collectionAPI.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    const errorRes = error?.response?.data?.message
    if (errorRes && errorRes === 'JWT Token is required') {
      window.location.replace('/auth/login')
    }
    return Promise.reject(error)
  },
)

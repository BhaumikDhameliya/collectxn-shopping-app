import axios from 'axios'
import { BASE_URL } from '../../config/constants'

export const collectionAPI = axios.create({
  baseURL: BASE_URL,
})

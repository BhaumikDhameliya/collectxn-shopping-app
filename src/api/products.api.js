import { collectionAPI } from "../utils/axios/axios.utils"

export const createProducts = async (payload) => {
    try {
        const res = await collectionAPI.post('/products', payload)
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}

export const getProducts = async (payload) => {
    try {
        const res = await collectionAPI.get('/products', payload)
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}

export const updateProducts = async (payload) => {
    try {
        const res = await collectionAPI.patch('/products', payload)
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}

export const deleteProducts = async (payload) => {
    try {
        const res = await collectionAPI.delete('/products', payload)
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}
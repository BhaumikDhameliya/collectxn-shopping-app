import { collectionAPI } from "../utils/axios/axios.utils"

export const createCategories = async (payload) => {
    try {
        const res = await collectionAPI.post('/categories', payload)
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}

export const getCategories = async (payload) => {
    try {
        const res = await collectionAPI.get('/categories', payload)
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}

export const updateCategories = async (payload) => {
    try {
        const res = await collectionAPI.patch('/categories', payload)
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}

export const deleteCategories = async (payload) => {
    try {
        const res = await collectionAPI.delete('/categories', payload)
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}
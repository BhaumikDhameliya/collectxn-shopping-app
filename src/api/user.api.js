import { collectionAPI } from "../utils/axios/axios.utils"

export const createUser = async (payload) => {
    try {
        const res = await collectionAPI.post('/user', payload)
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}

export const getUser = async (payload) => {
    try {
        const res = await collectionAPI.get('/user', payload)
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}

export const getUserProfile = async (payload) => {
    try {
        const res = await collectionAPI.get('/users/profile', payload)
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}

export const updateUser = async (payload) => {
    try {
        const res = await collectionAPI.patch('/user', payload)
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}

export const deleteUser = async (payload) => {
    try {
        const res = await collectionAPI.delete('/user', payload)
        console.log("res-----", res)
        return res?.data
    } catch (error) {
        console.log("error-----", error)
    }
}
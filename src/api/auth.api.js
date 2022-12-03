import { collectionAPI } from "../utils/axios/axios.utils"

export const SocialAuth = async (payload) => {
    try {
        const res = await collectionAPI.post('/users/social/auth', payload)
        console.log("res-----", res)
        let authToken = res?.data?.token
        if (authToken) {
            window.location.replace("/");
            authToken = `Bearer ${authToken}`
            localStorage.setItem("authToken", authToken)
            collectionAPI.defaults.headers.common['Authorization'] = authToken;
        }
        return res
    } catch (error) {
        console.log("error-----", error)
    }
}
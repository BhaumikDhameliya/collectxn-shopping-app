import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: {},
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.profile = action.payload
    },
    addDeliveryAddress: (state, action) => {
      state.profile.DeliveryAddresses = [
        ...(state.profile?.DeliveryAddresses || []),
        action.payload,
      ]
    },
    updateDeliveryAddress: (state, action) => {
      state.profile.DeliveryAddresses = state.profile?.DeliveryAddresses?.map(
        (address) => {
          if (address.id === action.payload?.id) {
            return action.payload
          }
          return address
        },
      )
    },
  },
})

export const { setUserProfile, addDeliveryAddress, updateDeliveryAddress } =
  userSlice.actions

export default userSlice.reducer

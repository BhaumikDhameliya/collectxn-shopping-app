import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: {},
    orders: [],
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.profile = action.payload
    },
    addDeliveryAddress: (state, action) => {
      let updatedAddresses = state.profile?.DeliveryAddresses || []
      if (action.payload?.isDefault) {
        updatedAddresses = updatedAddresses?.map((address) => {
          return { ...address, isDefault: false }
        })
      }
      state.profile.DeliveryAddresses = [...updatedAddresses, action.payload]
    },
    updateDeliveryAddress: (state, action) => {
      state.profile.DeliveryAddresses = state.profile?.DeliveryAddresses?.map(
        (address) => {
          if (address.id === action.payload?.id) {
            return action.payload
          }
          if (action.payload?.isDefault) {
            return { ...address, isDefault: false }
          }
          return address
        },
      )
    },
    makeDefaultDeliveryAddress: (state, action) => {
      state.profile.DeliveryAddresses = state.profile?.DeliveryAddresses?.map(
        (address) => {
          if (address.id === action.payload?.id) {
            return action.payload
          }
          return { ...address, isDefault: false }
        },
      )
    },
    removeDeliveryAddress: (state, action) => {
      state.profile.DeliveryAddresses =
        state.profile?.DeliveryAddresses?.filter(
          (address) => address.id !== action.payload?.id,
        )
    },
    setUserOrders: (state, action) => {
      return { ...state, orders: action.payload }
    },
  },
})

export const {
  setUserProfile,
  addDeliveryAddress,
  updateDeliveryAddress,
  makeDefaultDeliveryAddress,
  removeDeliveryAddress,
  setUserOrders,
} = userSlice.actions

export default userSlice.reducer

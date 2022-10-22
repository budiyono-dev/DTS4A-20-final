import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload
    },
    userLogout: () => initialState
  },
})

// Action creators are generated for each case reducer function
export const { userLogin, userLogout } = authSlice.actions

export default authSlice.reducer
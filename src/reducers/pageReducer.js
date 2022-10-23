import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
      pageLoading:(state,action)=>{
          state.loading = action.payload
      }
    // userLogin: (state, action) => {
    //   state.user = action.payload
    // },
    // userLogout: () => initialState
  },
})

// Action creators are generated for each case reducer function
export const {pageLoading } = pageSlice.actions

export default pageSlice.reducer
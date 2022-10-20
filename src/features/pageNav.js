import { createSlice } from '@reduxjs/toolkit'
const usePageNav = createSlice({
  reducerPath: 'pageNav',
  name: 'cart',
  initialState: {
    // cartItems: [],
    // totalCount: 0,
    // tax: 0,
    // subAmount: 0,
    // totalAmount: 0,
    page:""
  },
  reducers: {
    pageNavigation: (state, action) => {
      state.page = action.payload
    },
  },
})
export const {
  pageNavigation,
} = usePageNav.actions
export default usePageNav.reducer
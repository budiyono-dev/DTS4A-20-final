

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from '@reduxjs/toolkit'
import { apiSlice } from '../features/apiSlice'

import useCartReducer from '../features/useCartSlice'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['apiProductSlice'],
}
export const rootReducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  useCartReducer:useCartReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducers)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
})
setupListeners(store.dispatch)
export default store
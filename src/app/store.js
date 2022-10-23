import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/authReducer'
import pageReducer from '../reducers/pageReducer'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  page: pageReducer,
  auth: authReducer,
  // leftMenu: leftMenuReducer
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // blacklist: ['page']

}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {auth:persistedReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
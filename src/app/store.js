import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/authReducer'
import pageReducer from '../reducers/pageReducer'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // blacklist: ['page']
}

const authPersistReducer = persistReducer(persistConfig, authReducer);
const pagePersistedReducer = persistReducer(persistConfig, pageReducer);

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    page: pagePersistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
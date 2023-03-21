import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './reducers/api-reducer'

export const store = configureStore({
  reducer: {
    photos: apiReducer,
  },
})
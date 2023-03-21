import { createSlice } from '@reduxjs/toolkit'
import instance from "../../api";

const initialState = {
  loading: false,
  error: {
    status: false,
    message: ''
  },
  rate_limit: {
    remaining: null,
    total: 50
  },
  photos: []
}

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true
      state.photos = []
    },
    stopLoading: (state) => {
      state.loading = false
    },
    saveData: (state, action) => {
      state.photos = action.payload
    },
    catchError: (state, action) => {
      state.error.status = true
      state.error.message = action.payload
      state.photos = []
    },
    cleanError: (state) => {
      state.error.status = false
      state.error.message = ''
    },
    checkRateLimiter: (state, action) => {
      state.rate_limit = {
        ...action.payload
      }
    } 
  },
})

export const fetchData = (path) => async (dispatch) => {
  dispatch(startLoading())
  dispatch(cleanError())
  try {
    const response = await instance.get(path)
    dispatch(saveData(response.data))
    dispatch(checkRateLimiter({
      total: response.headers['x-ratelimit-limit'],
      remaining: response.headers['x-ratelimit-remaining'],
    }))
  } catch (error) {
    dispatch(catchError(error.errors))
  }
  dispatch(stopLoading())
}

export const { startLoading, stopLoading, saveData, catchError, cleanError, checkRateLimiter } = apiSlice.actions

export default apiSlice.reducer
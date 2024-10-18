import { configureStore } from '@reduxjs/toolkit'
import todooReducer from '../features/todooSlice'

export const store = configureStore({
  reducer: {
    todoos:todooReducer
  },
})
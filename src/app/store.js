import { configureStore } from '@reduxjs/toolkit'
import categoriasReducer from '../features/reducers/categoriasSlice'

export const store = configureStore({
  reducer: {
    categorias: categoriasReducer,
  },
})

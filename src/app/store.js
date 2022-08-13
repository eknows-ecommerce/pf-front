import { configureStore } from '@reduxjs/toolkit'
import categoriasReducer from '../features/reducers/categoriasSlice'
import pedidosReducer from '../features/reducers/pedidosSlice'
import librosReducer from '../features/reducers/librosSlice'
import mediasReducer from '../features/reducers/mediasSlice'
import tagsReducer from '../features/reducers/tagsSlice'
import usuariosReducer from '../features/reducers/usuariosSlice'

export const store = configureStore({
  reducer: {
    usuariosStore: usuariosReducer,
    categoriasStore: categoriasReducer,
    pedidosStore: pedidosReducer,
    librosStore: librosReducer,
    multimediaStore: mediasReducer,
    tagsStore: tagsReducer,
  },
})

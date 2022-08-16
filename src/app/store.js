import { configureStore } from '@reduxjs/toolkit'
import categoriasReducer from '../features/reducers/categoriasSlice'
import pedidosReducer from '../features/reducers/pedidosSlice'
import librosReducer from '../features/reducers/librosSlice'
import reviewsReducer from '../features/reducers/reviewsSlice'
import mediasReducer from '../features/reducers/mediasSlice'
import tagsReducer from '../features/reducers/tagsSlice'
import usuariosReducer from '../features/reducers/usuariosSlice'

export const store = configureStore({
  reducer: {
    usuariosStore: usuariosReducer,
    categoriasStore: categoriasReducer,
    pedidosStore: pedidosReducer,
    librosStore: librosReducer,
    reviewsStore: reviewsReducer,
    multimediaStore: mediasReducer,
    tagsStore: tagsReducer,
  },
})

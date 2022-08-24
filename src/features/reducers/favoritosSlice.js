import { createSlice } from '@reduxjs/toolkit'

import {
  getByUser,
  createByUser,
  deleteByUser,
} from 'features/actions/favoritos'

const initialState = {
  count: 0,
  favoritos: [],
  favorito: {},
  cargando: null,
  msg: null,
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    cambiarCargando: (state) => {
      state.cargando = !state.cargando
    },
  },
  extraReducers: {
    // OBTENER TODAS LOS FAVORITOS
    [getByUser.pending]: (state) => {
      state.cargando = true
    },
    [getByUser.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.favoritos = payload?.favoritos ?? []
      state.count = payload?.count ?? 0
    },
    [getByUser.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
    // CREAR UN FAVORITO NUEVO
    [createByUser.pending]: (state) => {
      state.cargando = true
    },
    [createByUser.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.favoritos = [...state.favoritos, payload.favorito]
      state.count = state.count + 1
      state.msg = payload?.msg
    },
    [createByUser.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
    // ELIMINAR UN FAVORITO NUEVO
    [deleteByUser.pending]: (state) => {
      state.cargando = true
    },
    [deleteByUser.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.favoritos = [
        ...state.favoritos.filter(
          (favorito) => favorito.id !== payload.favorito.id
        ),
      ]
      state.count = state.count - 1
      state.msg = payload?.msg
    },
    [deleteByUser.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
  },
})

export const { cambiarCargando } = favoritosSlice.actions
export default favoritosSlice.reducer

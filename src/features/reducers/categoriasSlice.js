import { createSlice } from '@reduxjs/toolkit'

import {
  getAll,
  create,
  getById,
  update,
  deleteById,
} from 'features/actions/categorias'

const initialState = {
  categorias: [],
  categoria: {},
  cargando: null,
  msg: null,
}

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    cambiarCargando: (state) => {
      state.cargando = !state.cargando
    },
  },
  extraReducers: {
    // OBTENER TODAS LAS CATEGORIAS
    [getAll.pending]: (state) => {
      state.cargando = true
    },
    [getAll.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.categorias = payload.categorias ?? []
    },
    [getAll.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
    // OBTENER CATEGORIA POR ID
    [getById.pending]: (state) => {
      state.cargando = true
    },
    [getById.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.categoria = payload.categoria
    },
    [getById.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
    // CREAR UNA CATEGORIA NUEVA
    [create.pending]: (state) => {
      state.cargando = true
    },
    [create.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.msg = payload.msg
      state.categorias = [...state.categorias, payload.categoria]
    },
    [create.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
    // ACTUALIZAR UNA CATEGORIA
    [update.pending]: (state) => {
      state.cargando = true
    },
    [update.fulfilled]: (state, { payload }) => {
      const index = state.categorias.findIndex(
        (categoria) => categoria.id === payload.categoria.id
      )

      state.categorias[index] = payload.categoria

      state.cargando = false
      state.msg = payload.msg
    },
    [update.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
    // ELIMINAR UNA CATEGORIA
    [deleteById.pending]: (state) => {
      state.cargando = true
    },
    [deleteById.fulfilled]: (state, { payload }) => {
      state.categorias = state.categorias.filter(
        (categoria) => categoria.id !== payload.categoria.id
      )
      state.msg = payload.msg
    },
    [deleteById.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
  },
})

export const { cambiarCargando } = categoriasSlice.actions

export default categoriasSlice.reducer

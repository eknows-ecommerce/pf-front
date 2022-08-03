import { createSlice } from '@reduxjs/toolkit'

import {
  getAll,
  create,
  getById,
  update,
  deleteById,
} from '../actions/categorias'

const initialState = {
  categorias: [],
  cargandoCategorias: null,
  categoria: {},
  cargandoCategoria: null,
  msg: null,
}

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    cambiarCargando: (state) => {
      state.cargandoCategorias = !state.cargandoCategorias
    },
  },
  extraReducers: {
    // OBTENER TODAS LAS CATEGORIAS
    [getAll.pending]: (state) => {
      state.cargandoCategorias = true
    },
    [getAll.fulfilled]: (state, { payload }) => {
      state.cargandoCategorias = false
      state.categorias = payload.categorias
    },
    [getAll.rejected]: (state, { payload }) => {
      state.cargandoCategorias = true
      state.msg = payload.msg
    },
    // OBTENER CATEGORIA POR ID
    [getById.pending]: (state) => {
      state.cargandoCategoria = true
    },
    [getById.fulfilled]: (state, { payload }) => {
      state.cargandoCategoria = false
      state.categoria = payload.categoria
    },
    [getById.rejected]: (state, { payload }) => {
      state.cargandoCategoria = true
      state.msg = payload.msg
    },
    // CREAR UNA CATEGORIA NUEVA
    [create.pending]: (state) => {
      state.cargandoCategoria = true
    },
    [create.fulfilled]: (state, { payload }) => {
      state.cargandoCategoria = false
      state.msg = payload.msg
      state.categorias = [...state.categorias, payload.categoria]
    },
    [create.rejected]: (state, { payload }) => {
      state.cargandoCategoria = true
      state.msg = payload.msg
    },
    // ACTUALIZAR UNA CATEGORIA
    [update.pending]: (state) => {
      state.cargandoCategoria = true
    },
    [update.fulfilled]: (state, { payload }) => {
      const index = state.categorias.findIndex(
        (categoria) => categoria.id === payload.categoria.id
      )

      state.categorias[index] = payload.categoria

      state.cargandoCategoria = false
      state.msg = payload.msg
    },
    [update.rejected]: (state, { payload }) => {
      state.cargandoCategoria = true
      state.msg = payload.msg
    },
    // ELIMINAR UNA CATEGORIA
    [deleteById.pending]: (state) => {
      state.cargandoCategoria = true
    },
    [deleteById.fulfilled]: (state, { payload }) => {
      state.categorias = state.categorias.filter(
        (categoria) => categoria.id !== payload.categoria.id
      )
      state.msg = payload.msg
    },
    [deleteById.rejected]: (state, { payload }) => {
      state.cargandoCategoria = true
      state.msg = payload.msg
    },
  },
})

export const { cambiarCargando } = categoriasSlice.actions

export default categoriasSlice.reducer

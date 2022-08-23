import { createSlice } from '@reduxjs/toolkit'

import {
  getAll,
  create,
  getById,
  update,
  deleteById,
} from 'features/actions/formatos'

const initialState = {
  formatos: [],
  formato: {},
  cargando: null,
  msg: null,
}

const formatosSlice = createSlice({
  name: 'formatos',
  initialState,
  reducers: {
    cambiarCargando: (state) => {
      state.cargando = !state.cargando
    },
  },
  extraReducers: {
    // OBTENER TODOS LOS FORMATOS
    [getAll.pending]: (state) => {
      state.cargando = true
    },
    [getAll.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.formatos = payload.formatos ?? []
    },
    [getAll.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
    // OBTENER FORMATO POR ID
    [getById.pending]: (state) => {
      state.cargando = true
    },
    [getById.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.formato = payload.formato
    },
    [getById.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
    // CREAR UN FORMATO NUEVA
    [create.pending]: (state) => {
      state.cargando = true
    },
    [create.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.msg = payload.msg
      state.formatos = [...state.formatos, payload.formato]
    },
    [create.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
    // ACTUALIZAR UN FORMATO
    [update.pending]: (state) => {
      state.cargando = true
    },
    [update.fulfilled]: (state, { payload }) => {
      const index = state.formatos.findIndex(
        (formato) => formato.id === payload.formato.id
      )

      state.formatos[index] = payload.formato

      state.cargando = false
      state.msg = payload.msg
    },
    [update.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
    // ELIMINAR UN FORMATO
    [deleteById.pending]: (state) => {
      state.cargando = true
    },
    [deleteById.fulfilled]: (state, { payload }) => {
      state.formatos = state.formatos.filter(
        (formato) => formato.id !== payload.formato.id
      )
      state.msg = payload.msg
    },
    [deleteById.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
  },
})

export const { cambiarCargando } = formatosSlice.actions

export default formatosSlice.reducer

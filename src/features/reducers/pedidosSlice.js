import { createSlice } from '@reduxjs/toolkit'

import { getAll, create, getById, update, deleteById } from '../actions/pedidos'

const initialState = {
  pedidos: [],
  pedido: {},
  cargando: null,
  msg: null,
}

const pedidosSlice = createSlice({
  name: 'pedidos',
  initialState,
  reducers: {
    cambiarCargando: (state) => {
      state.cargando = !state.cargando
    },
  },
  extraReducers: {
    // OBTENER TODOS LOS PEDIDOS
    [getAll.pending]: (state) => {
      state.cargando = true
    },
    [getAll.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.pedidos = payload.pedidos
    },
    [getAll.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
    // OBTENER PEDIDO POR ID
    [getById.pending]: (state) => {
      state.cargando = true
    },
    [getById.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.pedido = payload.pedido
    },
    [getById.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
    // CREAR UN PEDIDO NUEVO
    [create.pending]: (state) => {
      state.cargando = true
    },
    [create.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.msg = payload.msg
      state.pedidos = [...state.pedidos, payload.pedido]
    },
    [create.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
    // ACTUALIZAR UN PEDIDO
    [update.pending]: (state) => {
      state.cargando = true
    },
    [update.fulfilled]: (state, { payload }) => {
      const index = state.pedidos.findIndex(
        (pedido) => pedido.id === payload.pedido.id
      )

      state.pedidos[index] = payload.pedido

      state.cargando = false
      state.msg = payload.msg
    },
    [update.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
    // ELIMINAR UN PEDIDO
    [deleteById.pending]: (state) => {
      state.cargando = true
    },
    [deleteById.fulfilled]: (state, { payload }) => {
      state.pedidos = state.pedidos.filter(
        (pedido) => pedido.id !== payload.pedido.id
      )
      state.msg = payload.msg
    },
    [deleteById.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
    },
  },
})

export const { cambiarCargando } = pedidosSlice.actions

export default pedidosSlice.reducer

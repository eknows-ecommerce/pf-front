import { createSlice } from '@reduxjs/toolkit'

import { getAll } from '../actions/categorias'

const initialState = {
  categorias: [],
  cargandoCategorias: null,
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
    [getAll.pending]: (state) => {
      state.cargandoCategorias = true
    },
    [getAll.fulfilled]: (state, action) => {
      state.cargandoCategorias = false
      console.log(action.payload)
      state.categorias = action.payload
    },
    [getAll.rejected]: (state) => {
      state.cargandoCategorias = true
    },
  },
})

export const { cambiarCargando } = categoriasSlice.actions

export default categoriasSlice.reducer

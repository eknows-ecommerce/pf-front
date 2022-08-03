import { createSlice } from '@reduxjs/toolkit'

import { extraReducers } from '../actions/categorias'

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
  extraReducers: extraReducers,
})

export const { cambiarCargando } = categoriasSlice.actions

export default categoriasSlice.reducer

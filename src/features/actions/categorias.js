import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

// <----------------- Reducers ----------------->

// <----------------- extraReducers (funciones asincronicas) ----------------->
export const getCategorias = createAsyncThunk(
  'categorias/getCategorias',
  async () => {
    try {
      // const response = await axios.get('http://localhost:8000/categorias')
      const response = await axios.get('https://catfact.ninja/facts')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)

export const extraReducers = {
  [getCategorias.pending]: (state) => {
    state.cargandoCategorias = true
  },
  [getCategorias.fulfilled]: (state, action) => {
    state.cargandoCategorias = false
    state.categorias = action.payload
  },
  [getCategorias.rejected]: (state) => {
    state.cargandoCategorias = true
  },
}

import { createSlice } from '@reduxjs/toolkit'

import {
  getAllLibros,
  getAllUsuarios,
  updateLibro,
  updateUsuario,
} from 'features/actions/admin'
const initialState = {
  usuarios: [],
  libros: [],
  usuario: {},
  //pedidos:{},
  cargando: null,
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    cambiarCargando: (state) => {
      state.cargando = !state.cargando
    },
  },
  extraReducers: {
    //getAll
    //Libros
    [getAllLibros.pending]: (state) => {
      state.cargando = true
    },
    [getAllLibros.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.libros = payload.libros
      state.count = payload.count
    },
    [getAllLibros.rejected]: (state) => {
      state.cargando = true
    },
    //getAll
    //Usuarios
    [getAllUsuarios.pending]: (state) => {
      state.cargando = true
    },
    [getAllUsuarios.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.usuarios = payload.usuarios
      state.count = payload.count
    },
    [getAllUsuarios.rejected]: (state) => {
      state.cargando = true
    },
    //update
    //Libros
    [updateLibro.pending]: (state) => {
      state.cargando = true
    },
    [updateLibro.fulfilled]: (state, { payload }) => {
      const index = state.libros.findIndex(
        (libros) => libros.id === payload.libros.id
      )
      state.libros[index] = payload.libros
      state.cargando = false
    },
    [updateLibro.rejected]: (state) => {
      state.cargando = true
    },
    //update
    //Usuarios
    [updateLibro.pending]: (state) => {
      state.cargando = true
    },
    [updateUsuario.fulfilled]: (state, { payload }) => {
      const index = state.usuarios.findIndex(
        (usuario) => usuario.id === payload.usuario.id
      )
      state.usuario[index] = payload.usuario
      state.cargando = false
    },
    [updateUsuario.rejected]: (state) => {
      state.cargando = true
    },
  },
})
export const { cambiarCargando } = adminSlice.actions
export default adminSlice.reducer

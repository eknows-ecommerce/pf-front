import { createSlice } from '@reduxjs/toolkit'

import {
  getAll,
  getById,
  create,
  update,
  deleteById,
  getListCar,
  getAllPredictivo,
} from 'features/actions/libros'

const initialState = {
  count: 0,
  libros: [],
  libro: {},
  carrito: [],
  totalLibros: [],
  cargando: null,
  search: '',
  categorias: [],
  tags: [],
  formatos: [],
  rangoPrecios: {
    min: 0,
    max: 9999,
  },
  orden: {
    valor: 'titulo',
    dir: 'asc',
  },
  buscarPor: 'titulo',
  pagina: 1,
  limit: 6,
}

const librosSlice = createSlice({
  name: 'libros',
  initialState,
  reducers: {
    cambiarCargando: (state) => {
      state.cargando = !state.cargando
    },
    setOrden: (state, { payload }) => {
      state.orden = payload
    },
    setBuscarPor: (state, action) => {
      state.buscarPor = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setCategorias: (state, action) => {
      state.categorias = action.payload
    },
    setCarrito: (state, action) => {
      state.carrito = action.payload
    },
    setTags: (state, action) => {
      state.tags = action.payload
    },
    setRangoPrecios: (state, action) => {
      state.rangoPrecios = action.payload
    },
    setFormatos: (state, action) => {
      state.formatos = action.payload
    },
    setPagina: (state, action) => {
      state.pagina = action.payload
    },
    setLimit: (state, action) => {
      state.limit = action.payload
    },
  },
  extraReducers: {
    //getAll
    [getAllPredictivo.pending]: (state) => {
      state.cargando = true
    },
    [getAllPredictivo.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.totalLibros = payload.libros ?? []
    },
    [getAllPredictivo.rejected]: (state) => {
      state.cargando = true
    },
    //getListCar
    [getListCar.pending]: (state) => {
      state.cargando = true
    },
    [getListCar.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.carrito = payload.librosToCar
    },
    [getListCar.rejected]: (state) => {
      state.cargando = true
    },
    //getAll
    [getAll.pending]: (state) => {
      state.cargando = true
    },
    [getAll.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.libros = payload?.libros ?? []
      state.count = payload?.count
    },
    [getAll.rejected]: (state) => {
      state.cargando = true
    },
    //getById
    [getById.pending]: (state) => {
      state.cargando = true
    },
    [getById.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.libro = payload.libro
    },
    [getById.rejected]: (state) => {
      state.cargando = true
    },
    //create
    [create.pending]: (state) => {
      state.cargando = true
    },
    [create.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.libros = [...state.libros, payload.libro]
      state.totalLibros = [...state.totalLibros, payload.libro]
      state.total = state.total + 1
    },
    [create.rejected]: (state) => {
      state.cargando = true
    },
    //update
    [update.pending]: (state) => {
      state.cargando = true
    },
    [update.fulfilled]: (state, { payload }) => {
      const index = state.libros.findIndex(
        (libro) => libro.id === payload.libro.id
      )
      state.libros[index] = payload.libro
      state.cargando = false
    },
    [update.rejected]: (state) => {
      state.cargando = true
    },
    //deleteById
    [deleteById.pending]: (state) => {
      state.cargando = true
    },
    [deleteById.fulfilled]: (state, { payload }) => {
      state.libros = [
        ...state.libros.filter((libro) => libro.id !== payload.libro.id),
      ]
      state.total = state.total - 1
      state.cargando = false
    },
    [deleteById.rejected]: (state) => {
      state.cargando = true
    },
  },
})

export const {
  cambiarCargando,
  setOrden,
  setBuscarPor,
  setSearch,
  setCategorias,
  setCarrito,
  setTags,
  setRangoPrecios,
  setFormatos,
  setPagina,
  setLimit,
} = librosSlice.actions

export default librosSlice.reducer

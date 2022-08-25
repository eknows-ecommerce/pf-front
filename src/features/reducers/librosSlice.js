import { createSlice } from '@reduxjs/toolkit'

import {
  getAll,
  getById,
  create,
  update,
  deleteById,
  getListCar,
  getAllPredictivo,
  getAllKpage,
} from 'features/actions/libros'

const initialState = {
  count: 0,
  libros: [],
  libro: {},
  carrito: [],
  totalLibros: [],
  kpages: { count: 0, libros: [] },
  paginaActual: 1,
  total: 0,
  limite: 6,
  msg: '',
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
    setReset: (state, { payload }) => {
      if (payload.all) {
        state = initialState
      } else {
        state[payload.nombre] = payload.valor
      }
    },
    setPaginaActual: (state, { payload }) => {
      state.paginaActual = payload
    },
    setPaginasTotales: (state, { payload }) => {
      state.total = Math.ceil(payload.count / payload.limite)
    },
    setPaginaAnterior: (state) => {
      state.paginaActual =
        state.paginaActual - 1 < 1 ? state.total : state.paginaActual - 1
    },
    setPaginaSiguiente: (state) => {
      state.paginaActual =
        state.paginaActual + 1 <= state.total ? state.paginaActual + 1 : 1
    },
    setLimite: (state, { payload }) => {
      state.limite = payload
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
    //getAllKpage
    [getAllKpage.pending]: (state) => {
      state.cargando = true
    },
    [getAllKpage.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.kpages.count = payload.count ?? 0
      state.kpages.libros = payload.libros ?? []
    },
    [getAllKpage.rejected]: (state) => {
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
      state.msg = payload.msg
    },
    [create.rejected]: (state, { payload }) => {
      state.cargando = true
      state.msg = payload.msg
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
  setReset,
  setFormatos,
  setPagina,
  setLimit,
  setPaginaActual,
  setPaginasTotales,
  setPaginaSiguiente,
  setPaginaAnterior,
  setLimite,
} = librosSlice.actions

export default librosSlice.reducer

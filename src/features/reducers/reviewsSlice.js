import { createSlice } from '@reduxjs/toolkit'

import {
  getAll,
  create,
  getById,
  getByLibro,
  getByUser,
  update,
  /*deleteById,*/
} from 'features/actions/review'

const initialState = {
  count: 0,
  libro: {},
  reviews: [],
  review: {},
  cargando: null,
  busqueda: '',
}

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    cambiarCargando: (state) => {
      state.cargando = !state.cargando
    },
    setBusqueda: (state, action) => {
      state.busqueda = action.payload
    },
  },
  extraReducers: {
    //getAll
    [getAll.pending]: (state) => {
      state.cargando = true
    },
    [getAll.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.reviews = payload.reviews ?? []
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
      state.review = payload.review
    },
    [getById.rejected]: (state) => {
      state.cargando = true
    },
    //getByUser
    [getByUser.pending]: (state) => {
      state.cargando = true
    },
    [getByUser.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.review = payload.review
    },
    [getByUser.rejected]: (state) => {
      state.cargando = true
    },
    //getByLibro
    [getByLibro.pending]: (state) => {
      state.cargando = true
    },
    [getByLibro.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.libro = payload?.libro;
      state.reviews = payload?.libro?.ReviewLibro;
      state.count = payload?.count
    },
    [getByLibro.rejected]: (state) => {
      state.cargando = true
    },
    //create
    [create.pending]: (state) => {
      state.cargando = true
    },
    [create.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.reviews = [...state.reviews, payload?.review]
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
      const index = state.reviews.findIndex(
        (review) => review.id === payload.review.id
      )
      state.reviews[index] = payload.review
      state.cargando = false
    },
    [update.rejected]: (state) => {
      state.cargando = true
    },
    //deleteById
    /*[deleteById.pending]: (state) => {
      state.cargando = true
    },
    [deleteById.fulfilled]: (state, { payload }) => {
      state.reviews = [
        ...state.reviews.filter((review) => review.id !== payload.review.id),
      ]
      state.total = state.total - 1
      state.cargando = false
    },
    [deleteById.rejected]: (state) => {
      state.cargando = true
    },*/
  },
})

export const { cambiarCargando, setBusqueda } = reviewsSlice.actions

export default reviewsSlice.reducer

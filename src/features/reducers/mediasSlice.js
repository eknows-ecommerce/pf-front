import { createSlice } from '@reduxjs/toolkit'

import { getAll, getById, create, update, deleteById } from '../actions/medias'

const initialState = {
  medias: [],
  media: {},
  cargandoMedias: null,
}

const mediasSlice = createSlice({
  name: 'medias',
  initialState,
  reducers: {
    cambiarCargando: (state) => {
      state.cargandoMedias = !state.cargandoMedias
    },
  },
  extraReducers: {
    //getAll
    [getAll.pending]: (state) => {
      state.cargandoMedias = true
    },
    [getAll.fulfilled]: (state, { payload }) => {
      state.cargandoMedias = false
      state.medias = payload.medias ?? []
    },
    [getAll.rejected]: (state) => {
      state.cargandoMedias = true
    },
    //getById
    [getById.pending]: (state) => {
      state.cargandoMedias = true
    },
    [getById.fulfilled]: (state, { payload }) => {
      state.cargandoMedias = false
      state.media = payload.media
    },
    [getById.rejected]: (state) => {
      state.cargandoMedias = true
    },
    //create
    [create.pending]: (state) => {
      state.cargandoMedias = true
    },
    [create.fulfilled]: (state, { payload }) => {
      state.cargandoMedias = false
      state.medias = [...state.medias, payload.media]
    },
    [create.rejected]: (state) => {
      state.cargandoMedias = true
    },
    //update
    [update.pending]: (state) => {
      state.cargandoMedias = true
    },
    [update.fulfilled]: (state, { payload }) => {
      const index = state.medias.findIndex(
        (media) => media.id === payload.media.id
      )
      state.medias[index] = payload.tag
      state.cargandoMedias = false
    },
    [update.rejected]: (state) => {
      state.cargandoMedias = true
    },
    //deleteById
    [deleteById.pending]: (state) => {
      state.cargandoMedias = true
    },
    [deleteById.fulfilled]: (state, { payload }) => {
      state.medias = [
        ...state.medias.filter((media) => media.id !== payload.id),
      ]
      state.cargandoMedias = false
    },
    [deleteById.rejected]: (state) => {
      state.cargandoMedias = true
    },
  },
})

export const { cambiarCargando } = mediasSlice.actions

export default mediasSlice.reducer

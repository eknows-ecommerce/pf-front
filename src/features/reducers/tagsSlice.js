import { createSlice } from '@reduxjs/toolkit'

import { getAll, getById, create, update, deleteById } from '../actions/tags'

const initialState = {
  tags: [],
  tag: {},
  cargando: null,
}

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    cambiarCargando: (state) => {
      state.cargando = !state.cargando
    },
  },
  extraReducers: {
    //getAll
    [getAll.pending]: (state) => {
      state.cargando = true
    },
    [getAll.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.tags = payload.tags
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
      state.tag = payload.tag
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
      state.tags = [...state.tags, payload.tag]
    },
    [create.rejected]: (state) => {
      state.cargando = true
    },
    //update
    [update.pending]: (state) => {
      state.cargando = true
    },
    [update.fulfilled]: (state, { payload }) => {
      const index = state.tags.findIndex((tag) => tag.id === payload.tag.id)
      state.tags[index] = payload.tag
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
      state.tags = [...state.tags.filter((tag) => tag.id !== payload.tag.id)]
      state.cargando = false
    },
    [deleteById.rejected]: (state) => {
      state.cargando = true
    },
  },
})

export const { cambiarCargando } = tagsSlice.actions

export default tagsSlice.reducer

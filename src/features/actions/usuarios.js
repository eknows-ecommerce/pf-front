import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('getAll/@GETALL', async () => {
  try {
    const { data } = await axios.get('http://localhost:8000/usuarios')
    return data
  } catch (error) {
    const msg = error.message.data.msg
    return msg
  }
})
export const getAllByName = createAsyncThunk(
  'getAll/@GETALL',
  async ({ payload }) => {
    try {
      const { data } = await axios.get('http://localhost:8000/usuarios', {
        payload,
      })
      return data
    } catch (error) {
      const msg = error.message.data.msg
      return msg
    }
  }
)

export const getById = createAsyncThunk('getById/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/usuarios/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('create/@CREATE', async (usuario) => {
  try {
    const { data } = await axios.post('http://localhost:8000/usuarios', usuario)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk(
  'update/@PUT/ID',
  async ({ id, usuario }) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8000/usuarios/${id}`,
        usuario
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const deleteById = createAsyncThunk('delete/@DELETE/ID', async (id) => {
  try {
    const { data } = await axios.delete(`http://localhost:8000/usuarios/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

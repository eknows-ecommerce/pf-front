import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import baseUrl from './baseUrl'

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('usuarios/@GETALL', async () => {
  try {
    const { data } = await axios.get(
      baseUrl + '/usuarios'
    )
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
      const { data } = await axios.get(
        baseUrl + '/usuarios',
        {
          payload,
        }
      )
      return data
    } catch (error) {
      const msg = error.message.data.msg
      return msg
    }
  }
)

export const getById = createAsyncThunk('usuarios/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(
      baseUrl + '/usuarios/' + id
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('usuarios/@CREATE', async (usuario) => {
  try {
    console.log(usuario)
    const { data } = await axios.post(
      baseUrl + '/usuarios',
      usuario
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk(
  'usuarios/@UPDATE',
  async ({ id, usuario }) => {
    try {
      const { data } = await axios.put(
        baseUrl + '/usuarios/' + id,
        usuario
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const deleteById = createAsyncThunk(
  'usuarios/@DELETEBYID',
  async (id) => {
    try {
      const { data } = await axios.delete(
        baseUrl + '/usuarios/' + id
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

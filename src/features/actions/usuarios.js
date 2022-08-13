import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const Production = process.env.NODE_ENV
console.log(Production)

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('usuarios/@GETALL', async () => {
  try {
    const { data } = await axios.get(
      Production === 'production'
        ? `https://ebooks-back.herokuapp.com/usuarios`
        : 'http://localhost:8000/usuarios'
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
        Production === 'production'
          ? `https://ebooks-back.herokuapp.com/usuarios`
          : 'http://localhost:8000/usuarios',
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
      Production === 'production'
        ? `https://ebooks-back.herokuapp.com/usuarios/${id}`
        : `http://localhost:8000/usuarios/${id}`
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
      Production === 'production'
        ? `https://ebooks-back.herokuapp.com/usuarios`
        : 'http://localhost:8000/usuarios',
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
        Production === 'production'
          ? `https://ebooks-back.herokuapp.com/usuarios/${id}`
          : `http://localhost:8000/usuarios/${id}`,
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
        Production === 'production'
          ? `https://ebooks-back.herokuapp.com/usuarios/${id}`
          : `http://localhost:8000/usuarios/${id}`
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

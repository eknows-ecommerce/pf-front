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

export const getByNickname = createAsyncThunk(
  'getByNickname/@GETBYNICKNAME',
  async (user) => {
    try {
      const { data } = await axios.get(
        'http://localhost:8000/usuarios?nickname=' + user.nickname
      )
      return data
    } catch (error) {
      const msg = error.message.data.msg
      return msg
    }
  }
)

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

export const create = createAsyncThunk('usuarios/@CREATE', async (body) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: Production === 'production' ? `https://ebooks-back.herokuapp.com/usuarios` : 'http://localhost:8000/usuarios',
      headers: { authorization: `Bearer ${body.token}` },
      data: body.user,
    })
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk('usuarios/@UPDATE', async (usuario) => {
  try {
  const { data } = await axios.put(
      Production === 'production' ? `https://ebooks-back.herokuapp.com/usuarios/${usuario.id}` : `http://localhost:8000/usuarios/${usuario.id}`,
      usuario.datos
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

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

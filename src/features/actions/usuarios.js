import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const URL= process.env.URL

// <----------------- acciones que conectan a la base de datos ----------------->

export const getAll = createAsyncThunk(
  'usuarios/@GETALL',
  async (query = '') => {
    try {
      const { data } = await axios.get(
        URL!==undefined
          ? `${URL}/usuarios?${query}`
          : `http://localhost:8000/usuarios?${query}`
      )
      return data
    } catch (error) {
      const msg = error.message.data.msg
      return msg
    }
  }
)

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
        URL!==undefined
          ? `${URL}/usuarios`
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
      URL!==undefined
        ? `${URL}/usuarios/${id}`
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
      url:
        URL!==undefined
          ? `${URL}/usuarios`
          : 'http://localhost:8000/usuarios',
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
      URL!==undefined
        ? `${URL}/usuarios/${usuario.id}`
        : `http://localhost:8000/usuarios/${usuario.id}`,
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
        URL!==undefined
          ? `${URL}/usuarios/${id}`
          : `http://localhost:8000/usuarios/${id}`
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

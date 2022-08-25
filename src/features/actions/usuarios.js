import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const URL = process.env.REACT_APP_URL

// <----------------- acciones que conectan a la base de datos ----------------->

export const verificarUsuario = createAsyncThunk(
  'USUARIOS/@VERIFICARUSUARIO',
  async (query = '') => {
    try {
      const { data } = await axios.get(`${URL}/usuarios?${query}`)
      return data
    } catch (error) {
      const msg = error.message.data.msg
      return msg
    }
  }
)

export const getAll = createAsyncThunk(
  'USUARIOS/@GETALL',
  async (query = '') => {
    try {
      const { data } = await axios.get(`${URL}/usuarios${query}`)
      return data
    } catch (error) {
      const msg = error.message.data.msg
      return msg
    }
  }
)

export const getByNickname = createAsyncThunk(
  'USUARIOS/@GETBYNICKNAME',
  async (user) => {
    try {
      const { data } = await axios.get(
        `${URL}/usuarios?nickname=${user.nickname}`
      )
      return data
    } catch (error) {
      const msg = error.message.data.msg
      return msg
    }
  }
)

export const getAllByName = createAsyncThunk(
  'USUARIOS/@GETALLBYNAME',
  async ({ payload }) => {
    try {
      const { data } = await axios.get(`${URL}/usuarios`, {
        payload,
      })
      return data
    } catch (error) {
      const msg = error.message.data.msg
      return msg
    }
  }
)

export const getById = createAsyncThunk('USUARIOS/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(`${URL}/usuarios/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('USUARIOS/@CREATE', async (body) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: `${URL}/usuarios`,
      headers: { authorization: `Bearer ${body.token}` },
      data: body.user,
    })
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk('USUARIOS/@UPDATE', async (usuario) => {
  try {
    const { data } = await axios.put(`${URL}/usuarios/${usuario.id}`, usuario)
    console.log(data)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const updatePerfil = createAsyncThunk(
  'USUARIOS/@UPDATEPERFIL',
  async (usuario) => {
    try {
      const { data } = await axios.put(
        `${URL}/usuarios/${usuario.id}`,
        usuario.datos
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const deleteById = createAsyncThunk(
  'USUARIOS/@DELETEBYID',
  async (id) => {
    try {
      const { data } = await axios.delete(`${URL}/usuarios/${id}`)
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAllUsuarios = createAsyncThunk(
  'admin/usuarios/@GETALL',
  async (token) => {
    try {
      const { data } = await axios.get('http://localhost:8000/admin/usuarios', {
        headers: { authorization: `Bearer ${token}` },
      })
      return data
    } catch (error) {
      const msg = error.message.data.msg
      return msg
    }
  }
)

export const getAllLibros = createAsyncThunk(
  'admin/libros/@GETALL',
  async (token) => {
    try {
      const { data } = await axios.get('http://localhost:8000/admin/libros', {
        headers: { authorization: `Bearer ${token}` },
      })
      console.log(data)
      return data
    } catch (error) {
      const msg = error.message.data.msg
      return msg
    }
  }
)

export const updateUsuario = createAsyncThunk(
  'usuario/@UPDATE',
  async (body) => {
    try {
      const { data } = await axios({
        method: 'put',
        url: `http://localhost:8000/admin/usuarios/${body.id}`,
        headers: { authorization: `Bearer ${body.token}` },
        data: body.datos,
      })
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const updateLibro = createAsyncThunk('libro/@UPDATE', async (body) => {
  try {
    const { data } = await axios({
      method: 'put',
      url: `http://localhost:8000/admin/libros/${body.id}`,
      headers: { authorization: `Bearer ${body.token}` },
      data: body.datos,
    })
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

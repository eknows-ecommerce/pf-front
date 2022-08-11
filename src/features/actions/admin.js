import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//action que trae todos los usuarios
export const getAllUsuarios = createAsyncThunk(
  'usuarios/@GETALL',
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
//action que trae todos los libros

export const getAllLibros = createAsyncThunk(
  'usuarios/@GETALL',
  async (token) => {
    try {
      const { data } = await axios.get('http://localhost:8000/admin/libros', {
        headers: { authorization: `Bearer ${token}` },
      })
      return data
    } catch (error) {
      const msg = error.message.data.msg
      return msg
    }
  }
)
//action que edita los usuarios
export const updateUsuario = createAsyncThunk(
  'usuario/@UPDATE',
  async ({ id, usuario }) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8000/admin/usuarios/${id}`,
        usuario
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)
//action que edita el estado de los libros
export const updateLibro = createAsyncThunk(
  'libro/@UPDATE',
  async ({ id, libro }) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8000/admin/libros/${id}`,
        libro
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

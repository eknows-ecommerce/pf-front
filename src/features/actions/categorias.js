import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const URL= process.env.URL

// <----------------- acciones que interactuan con la DB ----------------->
export const getAll = createAsyncThunk('categorias/@GET/ALL', async (query) => {
  try {
    const { data } = await axios.get(
      URL!==undefined
        ? `${URL}/categorias?${query}`
        : `http://localhost:8000/categorias?${query}`
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getById = createAsyncThunk('categorias/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(
      URL!==undefined
        ? `${URL}/categorias/${id}`
        : `http://localhost:8000/categorias/${id}`
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk(
  'categorias/@CREATE',
  async (categoria) => {
    try {
      const { data } = await axios.post(
        URL!==undefined
          ? `${URL}/categorias`
          : 'http://localhost:8000/categorias',
        categoria
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const update = createAsyncThunk(
  'categorias/@PUT/ID',
  async ({ id, categoria }) => {
    try {
      const { data } = await axios.put(
        URL!==undefined
          ? `${URL}/categorias/${id}`
          : `http://localhost:8000/categorias/${id}`,
        categoria
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const deleteById = createAsyncThunk(
  'categorias/@DELETE/ID',
  async (id) => {
    try {
      const { data } = await axios.delete(
        URL!==undefined
          ? `${URL}/categorias/${id}`
          : `http://localhost:8000/categorias/${id}`
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

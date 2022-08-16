import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL= process.env.URL

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('libros/@GETALL', async (query) => {
  try {
    const { data } = await axios.get(
      URL!==undefined
        ? `${URL}/libros?${query}`
        : `http://localhost:8000/libros?${query}`
    )
    return data
  } catch (error) {
    console.log('error', error)
    const msg = error.response.data.msg
    return msg
  }
})

export const getListCar = createAsyncThunk(
  'libros/@GETLISTCAR',
  async (query) => {
    try {
      const { data } = await axios.get(
        URL!==undefined
          ? `${URL}/libros?${query}`
          : `http://localhost:8000/libros?${query}`
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const getById = createAsyncThunk('libros/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(
      URL!==undefined
        ? `${URL}/libros/${id}`
        : `http://localhost:8000/libros/${id}`
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('libros/@CREATE', async (libro) => {
  try {
    const { data } = await axios.post(
      URL!==undefined
        ? `${URL}/libros`
        : 'http://localhost:8000/libros',
      libro
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk('libros/@UPDATE', async (libro) => {
  try {
    const { data } = await axios.put(
      URL!==undefined
        ? `${URL}/libros/${libro.id}`
        : `http://localhost:8000/libros/${libro.id}`,
      libro
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const deleteById = createAsyncThunk('libros/@DELETEBYID', async (id) => {
  try {
    const { data } = await axios.delete(
      URL!==undefined
        ? `${URL}/libros/${id}`
        : `http://localhost:8000/libros/${id}`
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

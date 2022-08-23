import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = process.env.REACT_APP_URL

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('libros/@GETALL', async (query) => {
  try {
    const { data } = await axios.get(`${URL}/libros?${query}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getAllPredictivo = createAsyncThunk(
  'libros/@GETALLPREDICTIVO',
  async () => {
    try {
      const { data } = await axios.get(`${URL}/libros`)
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const getListCar = createAsyncThunk(
  'libros/@GETLISTCAR',
  async (query) => {
    try {
      const { data } = await axios.get(`${URL}/libros?${query}`)
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const getById = createAsyncThunk('libros/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(`${URL}/libros/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('libros/@CREATE', async (libro) => {
  try {
    const { data } = await axios.post(`${URL}/libros`, libro)
    return data
  } catch (error) {
    console.log(error)
    const msg = error.response.data
    return msg
  }
})

export const update = createAsyncThunk('libros/@UPDATE', async (libro) => {
  try {
    const { data } = await axios.put(`${URL}/libros/${libro.id}`, libro)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const deleteById = createAsyncThunk('libros/@DELETEBYID', async (id) => {
  try {
    const { data } = await axios.delete(`${URL}/libros/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data
    return msg
  }
})

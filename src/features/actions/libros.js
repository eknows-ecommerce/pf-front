import { createAsyncThunk } from '@reduxjs/toolkit'
const Production = process.env.PORT

import axios from 'axios'

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('libros/@GETALL', async (query) => {
  try {
    // console.log('query', query)
    const { data } = await axios.get(
      Production
        ? 'https://ebooks-back.herokuapp.com/libros?${query}'
        : `http://localhost:8000/libros?${query}`
    )
    // console.log(data)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getListCar = createAsyncThunk(
  'libros/@GETLISTCAR',
  async (query) => {
    try {
      console.log('query', query)
      const { data } = await axios.get(
        Production
          ? `https://ebooks-back.herokuapp.com/libros?${query}`
          : `http://localhost:8000/libros?${query}`
      )
      console.log(data)
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
      Production
        ? `https://ebooks-back.herokuapp.com/libros/${id}`
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
      Production
        ? `https://ebooks-back.herokuapp.com/libros`
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
      Production
        ? `https://ebooks-back.herokuapp.com/libros/${libro.id}`
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
      Production
        ? `https://ebooks-back.herokuapp.com/libros/${id}`
        : `http://localhost:8000/libros/${id}`
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

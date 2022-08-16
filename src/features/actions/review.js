import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const URL = process.env.URL

// <----------------- acciones que interactuan con la DB ----------------->
export const getAll = createAsyncThunk('reviews/@GET/ALL', async (query) => {
  try {
    console.log('query', query)
    const { data } = await axios.get(`${URL}/reviews${query}`)
    console.log('entra', data)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('reviews/@CREATE', async (review) => {
  try {
    const { data } = await axios.post(`${URL}/reviews`, review)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getById = createAsyncThunk('reviews/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(`${URL}/reviews/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk('reviews/@UPDATE', async (review) => {
  try {
    const { data } = await axios.put(`${URL}/reviews/${review.id}`, review)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const deleteById = createAsyncThunk(
  'reviews/@DELETEBYID',
  async (id) => {
    try {
      const { data } = await axios.delete(`${URL}/reviews/${id}`)
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

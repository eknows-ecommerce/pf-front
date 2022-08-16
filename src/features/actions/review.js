import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const Production = process.env.NODE_ENV

// <----------------- acciones que interactuan con la DB ----------------->
export const getAll = createAsyncThunk('reviews/@GET/ALL', async (query) => {
  try {
    console.log('query', query)
    const { data } = await axios.get(
      Production === 'production'
        ? `https://e-knows-back.herokuapp.com/reviews${query}`
        : `http://localhost:8000/reviews${query}`
    )
    console.log('entra', data)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('reviews/@CREATE', async (review) => {
  try {
    const { data } = await axios.post(
      Production === 'production'
        ? 'https://e-knows-back.herokuapp.com/reviews'
        : 'http://localhost:8000/reviews',
      review
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getById = createAsyncThunk('reviews/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(
      Production === 'production'
        ? `https://e-knows-back.herokuapp.com/reviews/${id}`
        : `http://localhost:8000/reviews/${id}`
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk('reviews/@UPDATE', async (review) => {
  try {
    const { data } = await axios.put(
      Production === 'production'
        ? `https://e-knows-back.herokuapp.com/reviews/${review.id}`
        : `http://localhost:8000/reviews/${review.id}`,
      review
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const deleteById = createAsyncThunk('reviews/@DELETEBYID', async (id) => {
  try {
    const { data } = await axios.delete(
      Production === 'production'
        ? `https://e-knows-back.herokuapp.com/reviews/${id}`
        : `http://localhost:8000/reviews/${id}`
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})
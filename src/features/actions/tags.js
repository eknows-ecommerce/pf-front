import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const Production = process.env.NODE_ENV

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('tags/@GETALL', async (query) => {
  try {
    const { data } = await axios.get(
      Production === 'production'
        ? `https://ebooks-back.herokuapp.com/tags?${query}`
        : `http://localhost:8000/tags?${query}`
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getById = createAsyncThunk('tags/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(
      Production === 'production'
        ? `https://ebooks-back.herokuapp.com/tags/${id}`
        : `http://localhost:8000/tags/${id}`
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('tags/@CREATE', async (tag) => {
  try {
    const { data } = await axios.post(
      Production === 'production'
        ? `https://ebooks-back.herokuapp.com/tags`
        : 'http://localhost:8000/tags',
      tag
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk('tags/@UPDATE', async (tag) => {
  try {
    const { data } = await axios.put(
      Production === 'production'
        ? `https://ebooks-back.herokuapp.com/tags/${tag.id}`
        : `http://localhost:8000/tags/${tag.id}`,
      tag
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const deleteById = createAsyncThunk('tags/@DELETEBYID', async (id) => {
  try {
    const { data } = await axios.delete(
      Production === 'production'
        ? `https://ebooks-back.herokuapp.com/tags/${id}`
        : `http://localhost:8000/tags/${id}`
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

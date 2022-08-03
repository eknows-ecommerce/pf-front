import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('tags/@GETALL', async () => {
  try {
    const { data } = await axios.get('http://localhost:8000/tag')
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getById = createAsyncThunk('tags/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/tag/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('tags/@CREATE', async (tag) => {
  try {
    const { data } = await axios.post('http://localhost:8000/tag', tag)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk('tags/@UPDATE', async (tag) => {
  try {
    const { data } = await axios.put(`http://localhost:8000/tag/${tag.id}`, tag)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const deleteById = createAsyncThunk('tags/@DELETEBYID', async (id) => {
  try {
    const { data } = await axios.delete(`http://localhost:8000/tag/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

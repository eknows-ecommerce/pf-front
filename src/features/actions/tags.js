import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = process.env.REACT_APP_URL

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('tags/@GETALL', async (query) => {
  try {
    const { data } = await axios.get(`${URL}/tags?${query}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getById = createAsyncThunk('tags/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(`${URL}/tags/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('tags/@CREATE', async (tag) => {
  try {
    const { data } = await axios.post(`${URL}/tags`, tag)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk('tags/@UPDATE', async (tag) => {
  try {
    const { data } = await axios.put(`${URL}/tags/${tag.id}`, tag)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const deleteById = createAsyncThunk('tags/@DELETEBYID', async (id) => {
  try {
    const { data } = await axios.delete(`${URL}/tags/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

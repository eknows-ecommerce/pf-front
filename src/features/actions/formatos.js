import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const URL = process.env.REACT_APP_URL

// <----------------- acciones que interactuan con la DB ----------------->
export const getAll = createAsyncThunk('formatos/@GET/ALL', async () => {
  try {
    const { data } = await axios.get(`${URL}/formatos`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getById = createAsyncThunk('formatos/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(`${URL}/formatos/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('formatos/@CREATE', async (formato) => {
  try {
    const { data } = await axios.post(`${URL}/formatos`, formato)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk('formatos/@PUT/ID', async (formato) => {
  try {
    const { data } = await axios.put(`${URL}/formatos/${formato.id}`, formato)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const deleteById = createAsyncThunk(
  'formatos/@DELETE/ID',
  async (id) => {
    try {
      const { data } = await axios.delete(`${URL}/formatos/${id}`)
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

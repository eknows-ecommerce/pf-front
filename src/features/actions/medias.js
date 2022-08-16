import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = process.env.URL

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('medias/@GETALL', async () => {
  try {
    const { data } = await axios.get(`${URL}/media`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getById = createAsyncThunk('medias/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(`${URL}/media/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})
export const create = createAsyncThunk('medias/@CREATE', async (media) => {
  try {
    const { data } = await axios.post(`${URL}/media`, media)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})
export const update = createAsyncThunk('medias/@UPDATE', async (media) => {
  try {
    const { data } = await axios.put(`${URL}/media/${media.id}`, media)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})
export const deleteById = createAsyncThunk('medias/@DELETEBYID', async (id) => {
  try {
    const { data } = await axios.delete(`${URL}/media/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

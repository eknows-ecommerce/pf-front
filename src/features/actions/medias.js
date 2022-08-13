import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import baseUrl from './baseUrl'

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('medias/@GETALL', async () => {
  try {
    const { data } = await axios.get(
      baseUrl + '/media'
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getById = createAsyncThunk('medias/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(
      baseUrl + '/media/' + id
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})
export const create = createAsyncThunk('medias/@CREATE', async (media) => {
  try {
    const { data } = await axios.post(
      baseUrl + '/media',
      media
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})
export const update = createAsyncThunk('medias/@UPDATE', async (media) => {
  try {
    const { data } = await axios.put(
      baseUrl + '/media/' + media.id,
      media
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})
export const deleteById = createAsyncThunk('medias/@DELETEBYID', async (id) => {
  try {
    const { data } = await axios.delete(
      baseUrl + '/media/' + id
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import baseUrl from './baseUrl'

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('tags/@GETALL', async () => {
  try {
    const { data } = await axios.get(
      baseUrl + '/tags'
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
      baseUrl + '/tags/' + id
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
      baseUrl + '/tags',
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
      baseUrl + '/tags/' + tag.id,
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
      baseUrl + '/tags/' + id
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import baseUrl from './baseUrl'

// <----------------- acciones que interactuan con la DB ----------------->
export const getAll = createAsyncThunk('categorias/@GET/ALL', async () => {
  try {
    const { data } = await axios.get(
      baseUrl + '/categorias'
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getById = createAsyncThunk('categorias/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(
      baseUrl + '/categorias/' + id
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('categorias/@CREATE', async (categoria) => {
  try {
    const { data } = await axios.post(
      baseUrl + '/categorias',
      categoria
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk('categorias/@PUT/ID', async ({ id, categoria }) => {
  try {
    const { data } = await axios.put(
      baseUrl + '/categorias/' + id,
      categoria
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
}
)

export const deleteById = createAsyncThunk('categorias/@DELETE/ID', async (id) => {
  try {
    const { data } = await axios.delete(
      baseUrl + '/categorias/' + id
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

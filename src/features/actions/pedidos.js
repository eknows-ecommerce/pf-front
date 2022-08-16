import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = process.env.REACT_APP_URL

// <----------------- acciones que interactuan con la DB ----------------->
export const getAll = createAsyncThunk('pedidos/@GET/ALL', async () => {
  try {
    const { data } = await axios.get(`${URL}/pedido`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getById = createAsyncThunk('pedido/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(`${URL}/pedido/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('pedido/@CREATE', async (pedido) => {
  try {
    const { data } = await axios.post(`${URL}/pedido`, pedido)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk(
  'pedido/@PUT/ID',
  async ({ id, pedido }) => {
    try {
      const { data } = await axios.put(`${URL}/pedido/${id}`, pedido)
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const deleteById = createAsyncThunk('pedido/@DELETE/ID', async (id) => {
  try {
    const { data } = await axios.delete(`${URL}/pedido/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

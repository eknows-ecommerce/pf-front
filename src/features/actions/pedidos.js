import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

// <----------------- acciones que interactuan con la DB ----------------->
export const getAll = createAsyncThunk('pedidos/@GET/ALL', async () => {
  try {
    const { data } = await axios.get('http://localhost:8000/pedido')
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getById = createAsyncThunk('pedido/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/pedido/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('create/@CREATE', async (pedido) => {
  try {
    const { data } = await axios.post('http://localhost:8000/pedido', pedido)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk(
  'update/@PUT/ID',
  async ({ id, pedido }) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8000/pedido/${id}`,
        pedido
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const deleteById = createAsyncThunk('delete/@DELETE/ID', async (id) => {
  try {
    const { data } = await axios.delete(`http://localhost:8000/pedido/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

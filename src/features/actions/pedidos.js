import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import baseUrl from './baseUrl'

// <----------------- acciones que interactuan con la DB ----------------->
export const getAll = createAsyncThunk('pedidos/@GET/ALL', async () => {
  try {
    const { data } = await axios.get(
      baseUrl + '/pedido'
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getById = createAsyncThunk('pedido/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(
      baseUrl + '/pedido/' + id
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('pedido/@CREATE', async (pedido) => {
  try {
    const { data } = await axios.post(
      baseUrl + '/pedido',
      pedido
    )
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
      const { data } = await axios.put(
        baseUrl + '/pedido/' + id,
        pedido
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const deleteById = createAsyncThunk('pedido/@DELETE/ID', async (id) => {
  try {
    const { data } = await axios.delete(
      baseUrl + '/pedido/' + id
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

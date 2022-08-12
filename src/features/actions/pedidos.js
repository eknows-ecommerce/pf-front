import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const Production = process.env.NODE_ENV

// <----------------- acciones que interactuan con la DB ----------------->
export const getAll = createAsyncThunk('pedidos/@GET/ALL', async () => {
  try {
    const { data } = await axios.get(
      Production
        ? `https://ebooks-back.herokuapp.com/pedido`
        : 'http://localhost:8000/pedido'
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
      Production
        ? `https://ebooks-back.herokuapp.com/pedido/${id}`
        : `http://localhost:8000/pedido/${id}`
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
      Production
        ? `https://ebooks-back.herokuapp.com/pedido`
        : 'http://localhost:8000/pedido',
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
        Production
          ? `https://ebooks-back.herokuapp.com/pedido/${id}`
          : `http://localhost:8000/pedido/${id}`,
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
      Production
        ? `https://ebooks-back.herokuapp.com/pedido/${id}`
        : `http://localhost:8000/pedido/${id}`
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

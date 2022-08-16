import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const Production = process.env.NODE_ENV

// <----------------- acciones que interactuan con la DB ----------------->
export const getAll = createAsyncThunk(
  'pedidos/@GET/ALL',
  async (query = '') => {
    try {
      console.log(query)
      const { data } = await axios.get(
        Production === 'production'
          ? `https://ebooks-back.herokuapp.com/pedidos?${query}`
          : `http://localhost:8000/pedidos?${query}`
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const getById = createAsyncThunk('pedido/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(
      Production === 'production'
        ? `https://ebooks-back.herokuapp.com/pedidos/${id}`
        : `http://localhost:8000/pedidos/${id}`
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
      Production === 'production'
        ? `https://ebooks-back.herokuapp.com/pedidos`
        : 'http://localhost:8000/pedidos',
      pedido
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk('pedido/@PUT/ID', async (pedido) => {
  try {
    const { data } = await axios.put(
      Production === 'production'
        ? `https://ebooks-back.herokuapp.com/pedidos/${pedido.id}`
        : `http://localhost:8000/pedidos/${pedido.id}`,
      pedido
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const deleteById = createAsyncThunk('pedido/@DELETE/ID', async (id) => {
  try {
    const { data } = await axios.delete(
      Production === 'production'
        ? `https://ebooks-back.herokuapp.com/pedidos/${id}`
        : `http://localhost:8000/pedidos/${id}`
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

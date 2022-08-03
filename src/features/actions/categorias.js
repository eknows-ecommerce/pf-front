import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('categorias/@GETALL', async () => {
  try {
    const { data } = await axios.get('http://localhost:8000/categoria')
    return data.categorias
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

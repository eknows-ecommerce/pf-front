import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('categorias/@GETALL', async () => {
  try {
    const { data } = await axios.get('http://localhost:8000/categorias')

    if (data.categorias) {
      return data.categorias
    } else {
      return data.msg
    }
  } catch (error) {
    console.log(error)
  }
})

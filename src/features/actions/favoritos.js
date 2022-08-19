import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = process.env.REACT_APP_URL

const getByUser = createAsyncThunk('FAVORITOS/@GetByUser', async (userId) => {
  try {
    const { data } = await axios.get(`${URL}/favoritos/usuario/${userId}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

const createByUser = createAsyncThunk(
  'FAVORITOS/@CreateByUser',
  async ({ usuarioId, libroId }) => {
    try {
      const { data } = await axios.post(
        `${URL}/favoritos/usuario/${usuarioId}`,
        {
          libroId,
        }
      )
      return data
    } catch (error) {
      console.log(error)
      const msg = error.response.data.msg
      return msg
    }
  }
)
const deleteByUser = createAsyncThunk(
  'FAVORITOS/@DeleteByUser',
  async ({ usuarioId, libroId }) => {
    try {
      const { data } = await axios.delete(
        `${URL}/favoritos/usuario/${usuarioId}`,
        {
          data: {
            libroId,
          },
        }
      )
      return data
    } catch (error) {
      console.log(error)
      const msg = error.response.data.msg
      return msg
    }
  }
)

export { getByUser, createByUser, deleteByUser }

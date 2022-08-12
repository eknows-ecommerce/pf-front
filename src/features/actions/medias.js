import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const Production = process.env.PORT

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('medias/@GETALL', async () => {
  try {
    const { data } = await axios.get(
      Production
        ? `https://ebooks-back.herokuapp.com/media`
        : 'http://localhost:8000/media'
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getById = createAsyncThunk('medias/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(
      Production
        ? `https://ebooks-back.herokuapp.com/media/${id}`
        : `http://localhost:8000/media/${id}`
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})
export const create = createAsyncThunk('medias/@CREATE', async (media) => {
  try {
    const { data } = await axios.post(
      Production
        ? `https://ebooks-back.herokuapp.com/media`
        : `http://localhost:8000/media`,
      media
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})
export const update = createAsyncThunk('medias/@UPDATE', async (media) => {
  try {
    const { data } = await axios.put(
      Production
        ? `https://ebooks-back.herokuapp.com/media/${media.id}`
        : `http://localhost:8000/media/${media.id}`,
      media
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})
export const deleteById = createAsyncThunk('medias/@DELETEBYID', async (id) => {
  try {
    const { data } = await axios.delete(
      Production
        ? `https://ebooks-back.herokuapp.com/media/${id}`
        : `http://localhost:8000/media/${id}`
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

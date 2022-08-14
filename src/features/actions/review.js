import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const Production = process.env.NODE_ENV

// <----------------- acciones que interactuan con la DB ----------------->
export const getAll = createAsyncThunk('reviews/@GET/ALL', async () => {
    try {
        const { data } = await axios.get(
            Production === 'production'
                ? 'https://ebooks-back.herokuapp.com/reviews'
                : 'http://localhost:8000/reviews'
        )
        return data
    } catch (error) {
        const msg = error.response.data.msg
        return msg
    }
})

export const create = createAsyncThunk('reviews/@CREATE', async (review) => {
    try {
        const { data } = await axios.post(
            Production === 'production'
                ? 'https://ebooks-back.herokuapp.com/reviews'
                : 'http://localhost:8000/reviews',
            review
        )
        return data
    } catch (error) {
        const msg = error.response.data.msg
        return msg
    }
})
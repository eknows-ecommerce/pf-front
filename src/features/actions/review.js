import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const Production = process.env.NODE_ENV

export const create = createAsyncThunk('pedido/@CREATE', async (review) => {
    try {
        const { data } = await axios.post(
            Production === 'production'
                ? `https://ebooks-back.herokuapp.com/review`
                : 'http://localhost:8000/review',
            review
        )
        return data
    } catch (error) {
        const msg = error.response.data.msg
        return msg
    }
})
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../../utils/axios'

const initialState = {
    tasks: [],
    popularTasks: [],
    loading: false
}

export const createTask = createAsyncThunk(
    '/task/createTask',
    async (params) => {
    try {
        const { data } = await axios.post('/tasks', params)
        return data
    } catch (error) {
        console.log(error);
    }
})

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: {
        [createTask.pending]: (state) => {
            state.loading = true
        },
        [createTask.fulfilled]: (state, action) => {
            state.loading = false
            state.tasks.push(action.payload)
        },
        [createTask.rejected]: (state) => {
            state.loading = false
        },
    },
})

export default taskSlice.reducer
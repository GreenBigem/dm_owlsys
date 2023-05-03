import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../../utils/axios'

const initialState = {
    tasks: [],
    popularTasks: [],
    loading: false
}

export const getAllTasks = createAsyncThunk(
    'task/getAllTasks', 
    async () => {
    try {
        const { data } = await axios.get('/tasks')
        return data
    } catch (error) {
        console.log(error);
    }
})

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

        //Создание поста

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

        // Получение всех постов

        [getAllTasks.pending]: (state) => {
            state.loading = true
        },
        [getAllTasks.fulfilled]: (state, action) => {
            state.loading = false
            state.tasks = action.payload.tasks
            state.popularTasks = action.payload.popularTasks
        },
        [getAllTasks.rejected]: (state) => {
            state.loading = false
        },

    },
})

export default taskSlice.reducer
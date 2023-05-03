import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../../utils/axios'

const initialState = {
  contractors: [],
  contractor: [],
  loading: false
}

export const getAllContractors = createAsyncThunk(
  'contractor/getAllContractors',
  async () => {
    try {
      const { data } = await axios.get('/contractors')
      return data
    } catch (error) {
      console.log(error);
    }
  })

export const createContractor = createAsyncThunk(
  '/contractor/createContractor',
  async (params) => {
    try {
      const { data } = await axios.post('/contractors', params)
      return data
    } catch (error) {
      console.log(error);
    }
  })

export const getContractorById = createAsyncThunk(
  '/contractor/getContractorById',
  async (params) => {
    try {
      console.log(params);
      const { data } = await axios.get(`/contractors/${params}`, params)
      return data
    } catch (error) {
      console.log(error);
    }
  })

export const contractorSlice = createSlice({
  name: 'contractor',
  initialState,
  reducers: {},
  extraReducers: {

    //Создание контрагента

    [createContractor.pending]: (state) => {
      state.loading = true
    },
    [createContractor.fulfilled]: (state, action) => {
      state.loading = false
      state.contractors.push(action.payload)
    },
    [createContractor.rejected]: (state) => {
      state.loading = false
    },

    // Получение всех контрагентов

    [getAllContractors.pending]: (state) => {
      state.loading = true
    },
    [getAllContractors.fulfilled]: (state, action) => {
      state.loading = false
      state.contractors = action.payload.contractors
    },
    [getAllContractors.rejected]: (state) => {
      state.loading = false
    },

    // Получение контрагента по ID

    [getContractorById.pending]: (state) => {
      state.loading = true
    },
    [getContractorById.fulfilled]: (state, action) => {
      state.loading = false
      state.contractor = action.payload.contractor
    },
    [getContractorById.rejected]: (state) => {
      state.loading = false
    },

  },
})

export default contractorSlice.reducer
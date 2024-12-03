import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Card } from "../types/kream";
import axios from "axios";

interface paramsType {
  page: number,
  limit: number,
  sortBy: string,
}

interface initialStateType {
  isLoading: boolean,
  errorMsg: string,
  data: Card[]
}

export const getPosts = createAsyncThunk('posts/getPosts', async(params: paramsType, ThunkApi) => {
  try {
    const { data } = await axios.get('api/posts', {params})
    return ThunkApi.fulfillWithValue(data);
  } catch (error) {
    return ThunkApi.fulfillWithValue(error);
  }
})

const initialState: initialStateType = {
  isLoading: false,
  errorMsg: '',
  data: [],
}

export const rdPosts = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getPosts.fulfilled, (state, action) => {
      state.data = action.payload
    })
  }
})

export default rdPosts.reducer;
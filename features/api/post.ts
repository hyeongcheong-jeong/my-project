import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialPostType, paramsType } from "@/util/types/kream";
import axios from "axios";
import { api } from "@/util/api/api";


export const getPosts = createAsyncThunk('rdPosts/getPosts', async(params: paramsType, ThunkApi) => {
  try {
    const { data } = await axios.get('api/posts', {params});
    return ThunkApi.fulfillWithValue(data);
  } catch (error) {
    return ThunkApi.fulfillWithValue(error);
  }
})

export const postLike = createAsyncThunk('rdPosts/postLike', async(id: string, thunkApi) => {
  try {
    const { data } = await api.post(`api/posts/${id}/like`);
    return thunkApi.fulfillWithValue(data);
  } catch (error) {
    return thunkApi.fulfillWithValue(error);
  }
})

const initialState: initialPostType = {
  isLoading: false,
  errorMsg: '',
  posts: [],
}

const rdPosts = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.posts;
    })
    .addCase(postLike.fulfilled, (state, action) => {
      console.log('12345678',state, action)
    })
  }
})

export default rdPosts.reducer;
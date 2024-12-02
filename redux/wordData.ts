import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { client } from "@/api/api";
import { WordType } from "@/types/study";


interface initialStateType {
  data: WordType[],
}

export const fetchWord = createAsyncThunk('wordData/fetchWord', async(day:string, thunkApi) => {
  try {
    const { data } = await client.get('/words', {params: {day}});
    return thunkApi.fulfillWithValue(data);
  } catch (error) {
    return thunkApi.fulfillWithValue(error);
  }
})

const initialState: initialStateType = {
  data: [],
}

const wordData = createSlice({
  name: 'wrodData',
  initialState,
  reducers: {// 비동기 처리부분
    getData:(state, action) => {
      state.data.push(action.payload)
    }
  }, //동기적 처리부분
  extraReducers: (builder) => {
    builder.addCase(fetchWord.fulfilled, (state, action: PayloadAction<WordType[]>) => {
      state.data = action.payload;
    })
  }
})

export const { getData } = wordData.actions;

export default wordData.reducer;
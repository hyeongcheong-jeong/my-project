import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Day } from "@/util/types/study";
import { client } from "@/util/api/api";

export const getDays = createAsyncThunk('daysData/getDays', async() => {
  try {
    const { data } = await client.get('/days');
    return data;
  } catch (error) {
    return error;
  }
})

interface initialType {
  days: Day[]
}

const initialState: initialType = {
  days: []
}

const daysData = createSlice({
  name: 'daysData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDays.fulfilled, (state, action: PayloadAction<Day[]>) => {
      state.days = action.payload;
    })
  }
});


export default daysData.reducer;
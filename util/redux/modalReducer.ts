import { createSlice } from "@reduxjs/toolkit";
import { Modal } from "@/util/types/study";

const initialState:Modal = {
  isModify: false,
  isCreateWord: false,
  info: {
    id: "",
    day: 0,
    eng: "",
    kor: "",
    isDone: false,
  },
}
const modalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modifyToggle: (state, action) => {
      state.isModify = action.payload.isModify;
      state.info = action.payload.info;
    },
    createToggle: (state, action) => {
      state.isCreateWord = action.payload;
    }
  }
})

export const { modifyToggle, createToggle } = modalReducer.actions;

export default modalReducer.reducer;
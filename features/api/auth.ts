import { loginInfo } from "@/entitiy";
import { api } from "@/util/api/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface loginParams {
  email: string,
  password: string
}

export const apiLogin = createAsyncThunk('auth/apiLogin', async (loginParams: loginParams, ThunkApi) => {
  try {
    const { data } = await api.post('api/auth/login', loginParams);
    return ThunkApi.fulfillWithValue(data);
  } catch (error) {
    return ThunkApi.fulfillWithValue(error);
  }
});
export const apiLogout = createAsyncThunk('auth/apiLoout', async (params: null, thunkApi) => {
  try {
    const { data } = await api.get('api/auth/logout');
    return thunkApi.fulfillWithValue(data);
  } catch (error) {
    return thunkApi.fulfillWithValue(error);
  }
});

const initialState = loginInfo;

const authUserInfo = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(apiLogin.fulfilled, (state, action) => {
      state.isLogin = true;
      Object.assign(state, action.payload.user);
      sessionStorage.setItem('token', action.payload.token);
    })
    .addCase(apiLogout.fulfilled, (state, action) => {
      state.isLogin = false;
      Object.assign(state.user, {id: '', email: ''});
      sessionStorage.removeItem('token');
      alert(action.payload.message);
    })
  }
})

export const { setLogin } = authUserInfo.actions;

export default authUserInfo.reducer;



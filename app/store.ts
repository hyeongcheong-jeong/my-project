import { authUserInfo, rdPosts } from "@/features";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  authUserInfo,
  rdPosts,
})

const store = configureStore({
  reducer: rootReducer
})

//외부 컴포넌트에서 store의 state와 dispathc를 사용하기 위해서는 아래와 같이 타입을 지정해 주어야 한다
export type Rootstate = ReturnType<typeof store.getState>; //redux 스토어의 state를 나타내는 타입
export type AppDispath = typeof store.dispatch; // redux 액션을 dispatch 하는 함수의 타입

export default store;

/*
react-redux 기존 문법
import { createStore } from "@reduxjs/toolkit";

let initialState = {}

const rootReducer = (state: any, action: any) => {
  switch (action) {
    case "" :
      return {
        ...state
      }
    default: initialState;
  }
}

const store = createStore(rootReducer);
exoprt default store;

*/
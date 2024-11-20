//리덕스 초기 상태값
const initialState = {
  name: "정형철",
  age: 40,
  job: "frontEngineer",
};

//switch 또는 if문으로 action type에 대한 reducer 작성
const userReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ACTION_LEE":
      return {
        ...state,
        name: "이동욱",
        age: 35,
        job: "backEngineer",
      };
    default:
      return initialState;
  }
};

export default userReducer;

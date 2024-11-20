import UserInfo from "./userInfo";
import Dispath from "./dispath";

export default function Redux() {
  const createStore = `
  import { createStore } from "redux";

  //리덕스 초기 상태값
  const initialState = {
    userInfo: {
      name: '정형철',
      age: 40,
      job: 'frontEngineer',
    }
  };
  //switch 또는 if문으로 action type에 대한 reducer 작성
  //state : 현재 상태
  //action: 액션 객체
  const rootReducer = (state, action) => {
    switch (action.type) {
      case "ACTION_NAME": 
        return {
          ...state,
          userInfo: {
            name: '이동욱',
            age: 35,
            job: 'backEngineer',
          }
        }
      default: return initialState;
    }
  }

  const store = createStore(rootReducer);

  export default store;
  `;
  const provider = `
  import { Provider } from 'react-redux';
  import store from './store';
  //리덕스를 사용할 component에 Provider를 감싸줌
  <Provider store={store}>
    <App />
  </Provider>
  );
  `;
  const useSelector = `
  //userSelector를 이용해서 userInfo에 사용한 redux state 값 매핑  

  import { useSelector } from "react-redux";
  export default function UserInfo() {
  const userInfo = useSelector((state) => state.userInfo);

    return (
      <ul>
        <li>
          <strong>이름</strong>
          <span>{userInfo.name}</span>
        </li>
        <li>
          <strong>나이</strong>
          <span>{userInfo.age}</span>
        </li>
        <li>
          <strong>직업</strong>
          <span>{userInfo.job}</span>
        </li>
      </ul>
    )
  }
  `;
  const useDispatch = `  
  import { useDispatch } from "react-redux"
  export default function Dispath() {
    
    //useDispatch hook을 사용해서 reducer 호출
    const dispath = useDispatch();

    let clickEvent = () => {
      //reducer의 action type을 보내주면 
      dispath({type:'ACTION_NAME', payload: {name: 이동욱}})
    }

    return (
      <button type="button" onClick={clickEvent}>유저 정보 변경</button>
    )
  }
  `;
  return (
    <section>
      <h1>react-redux jsx</h1>
      <dl>
        <dt>1.redux 설치</dt>
        <dd>
          <pre>
            <p className="code-header">터미널</p>
            npm install redux react-redux <br />
            <br />
            (pnpm 사용시) pnpm add redux react-redux
          </pre>
        </dd>
      </dl>
      <dl>
        <dt>2.createStore</dt>
        <dd>
          <pre>
            <p className="code-header">./store/index.js</p>
            {createStore}
          </pre>
        </dd>
      </dl>
      <dl>
        <dt>3.provider</dt>
        <dd>
          <pre>
            <p className="code-header">index.js</p>
            {provider}
          </pre>
        </dd>
      </dl>
      <dl>
        <dt>4.useSelector</dt>
        <dd>
          <pre>
            <p className="code-header">index.js</p>
            {useSelector}
          </pre>
        </dd>
        <dd className="example">
          <h3>useSelector 결과값</h3>
          <UserInfo />
        </dd>
      </dl>
      <dl>
        <dt>5.useDispatch</dt>
        <dd>
          <pre>
            <p className="code-header">index.js</p>
            {useDispatch}
          </pre>
        </dd>
        <dd className="example">
          <h3>useDispatch 결과값</h3>
          <Dispath />
          <UserInfo />
        </dd>
      </dl>
    </section>
  );
}

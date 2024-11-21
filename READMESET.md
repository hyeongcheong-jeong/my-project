fsd 설계 방법론, 아토믹

layer, slices, segments

react 설계 방법론
components
hook
layouts

layer:
app // 전역 설정 : provider, router, client 같은 hoc가 slice가 됨
precesses // 회원가입 같이 단계별로 연결되어있는 페이지들(step by step)
pages // 라우터에 따른 page분리
widgets // layout폴더 (회원가입) ,페이지내 공통 패턴(재사용)
featuers // 행동/동사가 slice , api segment에서는 해당 행동을 요청함
entities // components(데이터)
shared // hook, util, type 공통 slice 없음

상위 폴더에서 하위 폴더는 import가능하나 하위 폴더에서 상위폴더 import는 불가함
index.js를 적극 활용

slice:

segments : ui, model, api, lib

<Shared.Button onClick={forkFeature.api.fork} icon={shared.icon.fork} data={forkEntitiy.model.forkCount} />

CRLF

redux 개발의 복잡성을 낮추어주는 역활(데이터 중앙에서 관리)

configureStore(): createStore간소화된 구성 옵션과 좋은 기본값을 제공하기 위해 래핑합니다. 슬라이스 리듀서를 자동으로 결합하고, 제공하는 모든 Redux 미들웨어를 추가하고, redux-thunk기본적으로 포함하고, Redux DevTools Extension을 사용할 수 있도록 합니다.
createReducer(): switch 문을 작성하는 대신 케이스 리듀서 함수에 액션 유형의 조회 테이블을 제공할 수 있습니다. 또한 immer라이브러리를 자동으로 사용하여 일반적인 변경 코드(예: .)로 더 간단한 불변 업데이트를 작성할 수 있습니다 state.todos[3].completed = true.
createAction(): 주어진 작업 유형 문자열에 대한 작업 생성자 함수를 생성합니다.
createSlice(): 리듀서 함수 객체, 슬라이스 이름, 초기 상태 값을 받아들이고 해당 액션 생성자와 액션 유형을 갖는 슬라이스 리듀서를 자동으로 생성합니다.
combineSlices(): 여러 슬라이스를 단일 리듀서로 결합하고 초기화 후 슬라이스의 "지연 로딩"을 허용합니다.
createAsyncThunk: 작업 유형 문자열과 약속을 반환하는 함수를 수락하고 pending/fulfilled/rejected해당 약속에 따라 작업 유형을 전송하는 thunk를 생성합니다.
createEntityAdapter: 저장소에서 정규화된 데이터를 관리하기 위해 재사용 가능한 리듀서 및 선택기 세트를 생성합니다.
사용 편의성을 위해 Reselect 라이브러리 의 유틸리티 createSelector를 다시 내보냈습니다.
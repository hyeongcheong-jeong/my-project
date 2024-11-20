fsd 설계 방법론

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

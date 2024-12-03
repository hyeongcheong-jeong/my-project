"use client"
import { AppDispath } from "@/app/store";
import { DayList, WordList, Modify, CreateWork } from "@/components"
import { useAppSelector } from "@/util/hook/useAppSelector";//커스텀 useSelector 훅 지정
import { getDays } from "@/util/redux/DayData";
import { createToggle } from "@/util/redux/modalReducer";
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


export default function Study() {
  const { days } = useAppSelector((state) => state.getDays)
  const { id } = useRouter().query;
  const { isModify, info , isCreateWord} = useAppSelector((state) => state.modalReducer);
  const dispatch = useDispatch<AppDispath>()
  useEffect(() => {
    dispatch(getDays());
  }, [])
  function addDay() {
    if (window.confirm(`${days.length + 1} 일차 날짜를 추가하시겠습니까?`)) {
      alert('날짜가 추가되었습니다.')
    }
  }

  return (
    <main>
      <h1 className="flex justify-center py-10">
        <Link href="/">리엑트 hook을 활용한 단어장 만들기 (json 서버 사용)</Link>
      </h1>
      <div className="fixed right-10 top-10">
        <button type="button" className="border px-2 py-2 bg-green-200 rounded-xl" onClick={addDay}>날짜 추가</button>
        <button type="button" className="border px-2 py-2 bg-neutral-400 ml-2 rounded-xl" onClick={() => {
          dispatch(createToggle(true))
        }}>단어 추가</button>
      </div>
      <DayList id={`${id}`} days={days} />
      <WordList day={ `${id}`} />
      {isCreateWord && <CreateWork /> }
      {isModify && <Modify day={`${id}`} isModify={isModify} info={info} />}
    </main>
  )
}
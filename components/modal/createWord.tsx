import { client } from "@/util/api/api";
import store, { AppDispath } from "@/app/store";
import { useAppSelector } from "@/util/hook/useAppSelector";
import { createToggle } from "@/util/redux/modalReducer"
import { fetchWord } from "@/util/redux/wordData";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useDispatch } from "react-redux"


export default function CreateWork() {
  const { days } = useAppSelector((state) => state.getDays);
  const kor = useRef<HTMLInputElement>(null);
  const eng = useRef<HTMLInputElement>(null);
  const day = useRef<HTMLSelectElement>(null);
  const dispatch = useDispatch<AppDispath>();
  const router = useRouter()
  console.log(store.getState())

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = {
      id: `${Date.now()}`,
      kor: kor.current?.value,
      eng: eng.current?.value,
      dayValue: day.current?.value,
      isDone: false,
    }
    client.post('/words', params)
    .then(result => {
      console.log('aaa', result);
      if (result.status === 200 || result.status === 201) {
        alert('단어가 생성되었습니다.');
        router.push(`/study/${day.current?.value}`);
        dispatch(createToggle(false));
        dispatch(fetchWord(`${day.current?.value}`));
      }
    })
  }
  return (
    <div className="fixed w-full h-full left-0 top-0 flex justify-center items-center flex-col before:bg-black before:block before:absolute before:w-full before:h-full before:opacity-30">
      <form onSubmit={onSubmit}>
      <div className="bg-white relative rounded-lg pt-4 overflow-hidden">
        <h3 className="text-center text-xl pt-2 pb-4">단어 생성</h3>
        <div className="min-w-96 px-4">
          <div className="form-input mb-2">
            <label htmlFor="engName" className="w-10 inline-block">eng</label>
            <input type="text" id="engName" ref={eng} className="border w-[calc(100%_-_40px)]" />
          </div>
          <div className="form-input">
            <label htmlFor="korName" className="w-10 inline-block">kor</label>
            <input type="text" id="korName" ref={kor} className="border w-[calc(100%_-_40px)]" />
          </div>
          <div className="form-input mb-2">
            <label htmlFor="engName" className="w-10 inline-block">days</label>
            <select className="blodk border w-[calc(100%_-_40px)] mt-2" ref={day}>
              {days.map(day => (
                <option key={day.id} value={day.day}>{day.day} 일차</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <button className="w-[calc(50%)] h-[50px] bg-orange-600 text-white">생성</button>
          <button type="button" className="w-[calc(50%)] h-[50px] bg-slate-600 text-white" onClick={() => {
            dispatch(createToggle(false));
          }}>취소</button>
        </div>
        <div className="absolute top-1 right-2">
          <button type="button" className="relative rotate-45 w-4 h-4 before:absolute before:left-0 before:top-1/2 before:block before:content-[''] before:w-full before:h-px before:bg-black after:block after:content-[''] after:h-full after:w-px after:bg-black after:absolute after:left-1/2 after:-bottom-px" onClick={() => {
            dispatch(createToggle(false));
          }}>
            <span className="block overflow-hidden w-0 h-0 indent-96">닫기</span>
          </button>
        </div>
      </div>
      </form>
    </div>
  )
}
import { AppDispath } from "@/app/store"
import { modifyToggle } from "@/redux/modalReducer";
import { fetchWord } from "@/redux/wordData";
import { WordType } from "@/types/study";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

type propsType = {
  day: string
  isModify: boolean,
  info: WordType,
}

export default function Modify({day, isModify, info}: propsType) {
  const [eng, setEng] = useState(info.eng);
  const [kor, setKor] = useState(info.kor);
  const close = useDispatch();
  const dispatch = useDispatch<AppDispath>()
  function updateWord(){
    const params = {
      eng,
      kor,
    }
    axios.put(`http://localhost:3001/words/${info.id}`, {...info, ...params })
    .then(result => {
      if (result.status === 200) {
        alert('업데이트가 되었습니다.');
        close(modifyToggle(!isModify));
        dispatch(fetchWord(day))
      }
    })
  }
  return (
    <div className="fixed w-full h-full left-0 top-0 flex justify-center items-center flex-col before:bg-black before:block before:absolute before:w-full before:h-full before:opacity-30">
      <div className="bg-white relative rounded-lg pt-4 overflow-hidden">
        <h3 className="text-center text-xl pt-2 pb-4">단어 수정</h3>
        <div className="min-w-96 px-4">
          <div className="form-input mb-2">
            <label htmlFor="engName" className="w-10 inline-block">eng</label>
            <input type="text" id="engName" value={eng} onChange={(e) => {setEng(e.target.value)}} className="border w-[calc(100%_-_40px)]" />
          </div>
          <div className="form-input">
            <label htmlFor="korName" className="w-10 inline-block">kor</label>
            <input type="text" id="korName" value={kor} onChange={(e) => {setKor(e.target.value)}} className="border w-[calc(100%_-_40px)]" />
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <button type="button" className="w-[calc(50%)] h-[50px] bg-orange-600 text-white" onClick={updateWord}>수정</button>
          <button type="button" onClick={() => {
              close(modifyToggle(!isModify));
            }} className="w-[calc(50%)] h-[50px] bg-slate-600 text-white">취소</button>
        </div>
        <div className="absolute top-1 right-2">
          <button type="button" className="relative rotate-45 w-4 h-4 before:absolute before:left-0 before:top-1/2 before:block before:content-[''] before:w-full before:h-px before:bg-black after:block after:content-[''] after:h-full after:w-px after:bg-black after:absolute after:left-1/2 after:-bottom-px"
            onClick={() => {
              close(modifyToggle(!isModify));
            }}
          >
            <span className="block overflow-hidden w-0 h-0 indent-96">닫기</span>
          </button>
        </div>
      </div>
    </div>
  )
}
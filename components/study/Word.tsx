import { AppDispath } from "@/app/store"
import { modifyToggle } from "@/redux/modalReducer"
import { fetchWord } from "@/redux/wordData"
import { WordType } from "@/types/study"
import { useState } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"

type WordProps = {
  word: WordType,
  day: string,
}

export default function Word({word, day}:WordProps) {
  const dispatch = useDispatch<AppDispath>();
  const [isShow, setShow] = useState(true);
  function deleteWord() {
    if(window.confirm('정말 삭제하시겠습니까?')) {
      axios.delete(`http://localhost:3001/words/${word.id}`)
      .then(result => {
        if (result.status === 200) {
          alert('삭제 처리 되었습니다.');
          dispatch(fetchWord(day))
        }
      })
    }
  }
  function updateDone() {
    axios.put(`http://localhost:3001/words/${word.id}`, {...word, isDone:!word.isDone})
    .then(result => {
      if (result.status === 200) {
        dispatch(fetchWord(day))
      }
    })
  }
  return (
    <>
      <tr className={word.isDone ? 'bg-lime-400' : ''}>
        <td><input type="checkbox" checked={word.isDone} onChange={updateDone} /></td>
        <td className={word.isDone ? 'line-through' : ''}>{word.eng}</td>
        <td>
          {isShow ? word.kor : ''}
        </td>
        <td>
          <div className="flex justify-center">
            <button type="button" onClick={() => {
              setShow(!isShow)
            }} className="flex items-center justify-center px-2 py-2 bg-green-400 text-white mr-2 w-1/4">
              {isShow ? '감추기' : '뜻보기'}
            </button>
            <button type="button" onClick={() => {
              dispatch(modifyToggle({isModify: true, info: word}));
            }} className="flex items-center justify-center px-2 py-2 bg-orange-500 text-white mr-2 w-1/4">수정</button>
            <button type="button" onClick={deleteWord} className="flex items-center justify-center px-2 py-2 bg-red-700 text-white w-1/4">삭제</button>
          </div>
        </td>
      </tr>
    </>
  )
}
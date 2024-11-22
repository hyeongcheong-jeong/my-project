import { useState } from "react"
import axios from "axios";
export default function Word({word: w}) {
  const [word, setWord] = useState(w)
  const [isShow, setShow] = useState(false);
  const [isDone, setDone] = useState(word.isDone);
  function isToogleDone() {
    // fetch(`http://localhost:3001/words/${word.id}`, {
    //   method: 'PUT',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     ...word,
    //     isDone: !isDone,
    //   })
    // })
    // .then(res => {
    //   console.log(res);
    //   setDone(!isDone);
    // })
    // .catch(err => {
    //   console.log(err);
    // });

    axios.put(`http://localhost:3001/words/${word.id}`, {...word, isDone: !isDone})
    .then(res => {
      if(res.status === 200) {
        setDone(!isDone);
        alert('업데이트 되었습니다.');
      }
    })
    .catch(err => {
      console.log(err);
    })
  }
  function deleteWord() {
    if (window.confirm(`${word.eng} 단어를 삭제하시겠습니까?`)) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: 'DELETE',
      })
      .then(res => {
        if (res.ok) {
          setWord({id: 0});
          alert('삭제 되었습니다.');
        }
      })
    }
  }
  if (word.id === 0) {
    return null;
  }
  return (
    <tr className={isDone === true ? 'done' : ''}>
      <td><input type="checkbox" onChange={isToogleDone} checked={isDone} /></td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <div className="flex">
          <button type="button" onClick={() => {setShow(!isShow)}}>{isShow ? '감추기' : '단어 의미'}</button>
          <button type="button" onClick={deleteWord}>삭제</button>
          </div>
      </td>
    </tr>
  )
}
import UsegetWord from "../hooks/UsegetWord"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function CreateWord() {
  let days = UsegetWord('http://localhost:3001/days');
  const history = useNavigate();
  console.log(history)
  function onSubmit(e) {
    e.preventDefault();
    console.log(korVal.current.value);
    console.log(engVal.current.value);
    console.log(dayVal.current.value);

    fetch('http://localhost:3001/words', {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        eng: engVal.current.value,
        kor: korVal.current.value,
        day: dayVal.current.value,
        isDone: false,
      })
    })
    .then(res => {
      if(res.ok) {
        alert('단어가 생성되었습니다.');
        history(`/days/${dayVal.current.value}`);
      }
    })
  }

  const korVal = useRef(null);
  const engVal = useRef(null);
  const dayVal = useRef(null);
  return (
    <form onSubmit={onSubmit}>
      <p>
      <label>단어</label>
      <input type="text" ref={engVal} />
      </p>
      <p>
      <label>뜻</label>
      <input type="text" ref={korVal} />
      </p>
      <p>
        <select ref={dayVal}>
          {days.map((day => (
            <option key={day.id} value={day.today}>{day.today}</option>
          )))}
        </select>
      </p>
      <button type="submit">저장</button>
    </form>
  )
}
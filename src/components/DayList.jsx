import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import Day from "./Day";
import UsegetWord from "../hooks/UsegetWord";

export default function DayList() {
  let { day } = useParams();
  let days = UsegetWord('http://localhost:3001/days');
  return (
    <>
    <ul className="day-container">
      {days.map(current => {
        return <li key={current.id} className={current.id === Number(day) ? 'current' : ''}>
          <Link to={`/days/${current.today}`}>{current.today} 일차</Link>
        </li>
      })}
    </ul>
    <div className="top-button">
      <div className="flex right">
        <Link to="/create">단어추가</Link>
        <button type="button">day 추가</button>
      </div>
    </div>
    <Day />
    </>
  )
}
import Dummy from "../db/data.json"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function DayList() {
  const a = useParams();
  console.log(a);
  return (
    <ul className="day-container">
      {Dummy.days.map(day => {
        return <li key={day.id}>
          <Link to={`/days/${day.today}`}>{day.today} 일차</Link>
        </li>
      })}
    </ul>
  )
}
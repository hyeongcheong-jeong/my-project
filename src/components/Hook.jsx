import DayList from "./DayList"
import { Link } from "react-router-dom"

export default function Hook() {
  return (
    <section>
      <h1>
        <Link to="/">react 단어 학습입니다.</Link>
      </h1>
      <DayList />
    </section>
  )
}
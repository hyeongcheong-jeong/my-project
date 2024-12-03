import Link from "next/link";
import { Day } from "@/util/types/study";


type Props = {
  id: string,
  days: Day[],
}

export default function DayList({id, days}: Props) {
  return (
    <ul className="flex justify-center">
      {days.map(day => (
        <li key={day.id}>
          <Link href={`/study/${day.id}`} className={`
            flex justify-center items-center px-8 py-2 mx-1 border-solid border-gray-200 border hover:bg-blue-600 hover:text-white
            ${id === day.id ? 'bg-blue-600 text-white' : ''}
          `}>{day.day} 일차</Link>
        </li>
      ))}
    </ul>
  )
}
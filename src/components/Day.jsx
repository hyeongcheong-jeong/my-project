import Word from "./Word";
import { useParams } from "react-router-dom";
import UsegetWord from "../hooks/UsegetWord";

export default function Day() {
  let { day } = useParams();
  let wordList = UsegetWord(`http://localhost:3001/words?day=${day}`);
  return (
    <table>
      <caption>일차 단어</caption>
      <tbody>
        {wordList.map(word => (
          <Word word={word} key={word.id} />
        ))}
      </tbody>
    </table>
  )
}
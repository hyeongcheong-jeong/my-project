import { useEffect } from "react";
import Word from "./Word";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath, Rootstate } from "@/app/store";
import { fetchWord } from "@/redux/wordData";

type Props = {
  day: string
}
export default function WordList({day}:Props) {
  const { data } = useSelector((state: Rootstate) => state.wordData);
  const dispatch = useDispatch<AppDispath>();
  useEffect(() => {
    const dayparams = day || "1";
    dispatch(fetchWord(dayparams));
  }, [day])
  return (
    <table>
      <caption>? 단어</caption>
      <colgroup>
        <col width="40px" />
        <col width="200px" />
        <col width="*" />
        <col width="300px" />
      </colgroup>
      <thead>
        <tr>
          <th scope="row"></th>
          <th scope="row">단어</th>
          <th scope="row">뜻</th>
          <th scope="row">기능</th>
        </tr>
      </thead>
      <tbody>
        {data.map(word => (
          <Word key={'word'+ word.id} word={word} day={day} />
        ))}
      </tbody>
    </table>
  )
}
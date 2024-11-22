import { useEffect, useState } from "react";
import axios from "axios";

export default function UsegetWord(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch 방식
    // fetch('http://localhost:3001/days')
    // .then(result => {
    //   return result.json();
    // })
    // .then(data => {
    //   setDays(data);
    // })
    // .catch(err => {
    //   console.log(err);
    // })
    // console.log('성공');
    axios.get(url)
    .then(result => {
      setData(result.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [url]);

  return data;
}
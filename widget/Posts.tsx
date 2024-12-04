import { AppDispath, Rootstate } from "@/app/store";
import Button from "@/components/Button";
import { getPosts } from "@/util/redux/Posts";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"

export default function Posts() {
  const dispatch = useDispatch<AppDispath>();
  const data = useSelector((state: Rootstate) => state.Posts)
  console.log(data);
  useEffect(() => {
    dispatch(getPosts({page:1, limit:10, sortBy:'latest'}));
  }, [dispatch]);
  return (
    <div>
       <Button intent="secondary">Button123</Button>
    </div>
  )
}
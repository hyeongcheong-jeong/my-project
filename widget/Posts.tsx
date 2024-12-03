import { AppDispath } from "@/app/store";
import { getPosts } from "@/util/redux/Posts";
import { useEffect } from "react";
import { useDispatch } from "react-redux"

export default function Posts() {
  const dispatch = useDispatch<AppDispath>();

  useEffect(() => {
    dispatch(getPosts({page:1, limit:10, sortBy:'latest'}));
  }, [dispatch])
  return (
    <div>Card</div>
  )
}
import Posts from "@/widget/Posts";
import { postsParams } from "@/entitiy";
import { useAppDispatch, useAppSelector } from "@/util/hook";
import { getPosts } from "@/features/api/post";
import { useEffect } from "react";
import Loading from "@/widget/Loading";
import { setLogin } from "@/features/api/auth";


export default function myApp() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.rdPosts);
  const { isLogin } = useAppSelector(state => state.authUserInfo);
  useEffect(() => {
    dispatch(setLogin(sessionStorage.getItem('token') !== null));
    dispatch(getPosts(postsParams));
    console.log('isLoading', isLogin);
  }, [dispatch]);

  return (
    <>
      <main>
        <Posts data={data.posts} />
      </main>
      {data.isLoading && <Loading />}
    </>
  )
}
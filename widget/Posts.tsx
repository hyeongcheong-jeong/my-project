import Button from "@/components/Button";
import { apiLogin, apiLogout } from "@/features/api/auth";
import { useAppDispatch } from "@/util/hook";
import { postLike } from "@/features/api/post";
import { PostType } from "@/util/types/kream";
import ImageCom from "@/components/ImageCom";
import Link from "next/link";

interface propsType {
  data: PostType[]
}

export default function Posts({data}: propsType) {
  const dispatch = useAppDispatch();
  console.log('data', data)
  return (
    <>
      <div className="fixed left-1/2 top-1/2 flex">
        <Button intent="primary" onClick={() => dispatch(apiLogin(
          {
            email: 'jei.lee1@adcapsule.co.kr',
            password: 'adcap0902',
          }
        ))}>로그인</Button>
          <Button intent="secondary" onClick={() => dispatch(apiLogout(null))}>로그아웃</Button>

      </div>
      <div>
        <Button btnType="like" onClick={() => dispatch(postLike('cbaa9a25-2cde-4282-97b5-65902f0b23dc'))} />
      </div>
      <div>
        {data.map(post => (
          <li key={post.id}>
            {post.files.map((file, index) => (
              <Link href={`/detail/${post.id}`} key={file.id}>
                {index === 0 && <ImageCom key={file.id} imgSrc={file.file_path} width={150} height={200} alt="제목" />}
              </Link>
            ))}
          </li>
        ))}
      </div>
    </>
  )
}
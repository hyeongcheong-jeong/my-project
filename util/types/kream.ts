export type Comments = {// 커멘트 타입
  id: string,
  content: string,
  created_at: string,
  updated_at: string,
  like_count: number,
}


export type PostType = {// 게시물 목록/ 상세 타입 정의
  id: string,
  title: string,
  content: string,
  type: string,
  views: number,
  created_at: string,
  updated_at: string,
  username: string,
  like_count: number,
  like_user: string[],
  tags: string[],
  files: string[],
  comments?: Comments[],
}

export type Card = { // 게시물 목록
  page: number,
  limit: number,
  posts: PostType 
}
export type Comments = {// 커멘트 타입
  id: string,
  content: string,
  created_at: string,
  updated_at: string,
  like_count: number,
}

export type ImagesFileType = {
  file_path: string,
  id: string,
  uploaded_at: string,
  uploader_id: string,
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
  files: ImagesFileType[],
  comments?: Comments[],
}

export type Menu = { // 하단 메뉴 타입
  menu: string,
  url: string,
  isCurrent: boolean,
}

export type paramsType = {
  page?: number,
  limit?: number,
  sortBy?: string,
  email?: string,
  password?: string,
}

export type initialPostType = {
  isLoading: boolean,
  errorMsg: string,
  posts: PostType[],
}

export type likeType = {
  message: string,
  like_count: number,
  like_users: string[]
}

export type userType = {
  id: string,
  email: string,
}
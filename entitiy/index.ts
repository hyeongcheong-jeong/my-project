import { likeType, Menu, paramsType, userType } from "../util/types/kream";

export const menu: Menu[] = [
  {
    menu: 'HOME',
    url: '/home',
    isCurrent: false,
  },
  {
    menu: 'STYLE',
    url: '/style',
    isCurrent: false,
  },
  {
    menu: 'SHOP',
    url: '/shop',
    isCurrent: false,
  },
  {
    menu: 'SAVED',
    url: '/saved',
    isCurrent: false,
  },
  {
    menu: 'MY',
    url: '/mypage',
    isCurrent: false,
  },
]

export const postsParams: paramsType = {
  page: 1,
  limit: 10,
  sortBy: 'latest',
}

interface loginType {
  isLogin: boolean,
  like: likeType,
  user: userType,
}
export const loginInfo: loginType = {
  isLogin: false,
  like : {
    like_count: 0,
    like_users: [],
    message: '',
  },
  user: {
    email: '',
    id: '',
  }
}
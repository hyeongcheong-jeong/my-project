"use client"
import { Provider } from "react-redux"
import store from "@/app/store"

export type Props = {
  children: React.ReactNode
}
export default function ReduxProvider({children}: Props) {
  console.log('k1k2kk', children);
  return (
    <Provider store={store}>{children}</Provider>
  )
}
import { Rootstate, AppDispath } from "@/app/store";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector; //useSelector custom hook
export const useAppDispatch = useDispatch.withTypes<AppDispath>() //usedispath 액션 타입 커스텀
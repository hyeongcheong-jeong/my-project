import { Rootstate } from "@/app/store";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
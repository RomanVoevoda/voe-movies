import { AppDispatch } from "@/app/store";
import { useDispatch } from "react-redux";

export const useTypedDispatch = useDispatch.withTypes<AppDispatch>();

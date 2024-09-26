import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

export const useTypedSelector = useSelector.withTypes<RootState>();

import { filtersSliceReducer } from "@/entities";
import { baseApi } from "@/shared/config";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  filters: filtersSliceReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

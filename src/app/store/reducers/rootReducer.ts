import { filtersSliceReducer, moviesApi } from "@/entities";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  filters: filtersSliceReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
});

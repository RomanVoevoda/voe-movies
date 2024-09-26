import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

export const createReduxStore = () => {
  return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<
  ReturnType<typeof createReduxStore>["getState"]
>;

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

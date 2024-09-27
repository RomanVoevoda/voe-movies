import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";
import { Store } from "@/shared/config";

export const createReduxStore = (initialState?: Store) => {
  return configureStore({ reducer: rootReducer, preloadedState: initialState });
};

export type RootState = ReturnType<ReturnType<typeof createReduxStore>["getState"]>;

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";
import { baseApi, Store } from "@/shared/config";
import { setupListeners } from "@reduxjs/toolkit/query";

const middleware = [baseApi.middleware];

export const createReduxStore = (initialState?: Store) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    preloadedState: initialState,
  });
};

setupListeners(createReduxStore().dispatch);

export type RootState = ReturnType<ReturnType<typeof createReduxStore>["getState"]>;

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

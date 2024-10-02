import { moviesApi } from "@/entities";

export interface Store {
  [moviesApi.reducerPath]: ReturnType<typeof moviesApi.reducer>;
}

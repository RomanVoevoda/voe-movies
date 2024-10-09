import { baseApi } from "../rtkQuery/baseApi";

export interface Store {
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}

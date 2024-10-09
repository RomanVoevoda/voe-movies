import { createApi } from "@reduxjs/toolkit/query/react";
import { apiTags } from "./apiTags";
import { axiosBaseQuery } from "./axiosBaseQuery";

if (!process.env.NEXT_PUBLIC_BASE_URL) {
  throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
}

if (!process.env.NEXT_PUBLIC_API_KEY) {
  throw new Error("NEXT_PUBLIC_API_KEY is not defined");
}

export const baseApi = createApi({
  tagTypes: Object.values(apiTags),
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
    },
  }),
  endpoints: () => ({}),
});

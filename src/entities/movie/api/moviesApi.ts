import { axiosBaseQuery } from "@/shared/config";
import { defaultFilters } from "@/shared/consts/defaultFilters";
import { FiltersType, MovieInfo, MoviesCollections, MoviesPremieres } from "@/shared/model";
import { createApi } from "@reduxjs/toolkit/query/react";

if (!process.env.NEXT_PUBLIC_BASE_URL) {
  throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
}

if (!process.env.NEXT_PUBLIC_API_KEY) {
  throw new Error("NEXT_PUBLIC_API_KEY is not defined");
}

export const moviesApi = createApi({
  reducerPath: "movieApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
    },
  }),

  endpoints: (builder) => ({
    getMovie: builder.query<MovieInfo, number>({
      query: (id) => ({ url: `films/${id}`, method: "get" }),
    }),

    getMoviesByFilters: builder.query<MovieInfo[], Partial<FiltersType>>({
      query: (filters) => ({
        url: `films`,
        method: "get",
        params: { ...defaultFilters, ...filters },
      }),
    }),

    getMoviesCollection: builder.query<MovieInfo[], MoviesCollections>({
      query: ({ type = "TOP_POPULAR_ALL", page = 1 }) => ({
        url: `films/collections`,
        method: "get",
        params: { type: type, page: page },
      }),
    }),

    getMoviesPremieres: builder.query<MovieInfo[], MoviesPremieres>({
      query: ({ year, month }) => ({
        url: `films/premieres`,
        method: "get",
        params: month ? { year: year, month: month } : { year: year },
      }),
    }),
  }),
});

export const {
  useGetMovieQuery,
  useGetMoviesByFiltersQuery,
  useGetMoviesCollectionQuery,
  useGetMoviesPremieresQuery,
} = moviesApi;

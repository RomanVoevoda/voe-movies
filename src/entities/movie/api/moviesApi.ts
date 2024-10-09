import { baseApi } from "@/shared/config";
import { defaultFilters } from "@/shared/consts";

import {
  FiltersType,
  MovieImages,
  MovieImagesQuery,
  MovieInfo,
  MovieItems,
  MoviesCollections,
  MoviesPremieres,
} from "@/shared/model";

const moviesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMovie: builder.query<MovieInfo, number>({
      query: (id) => ({ url: `films/${id}`, method: "get" }),
    }),

    getMovieImages: builder.query<MovieImages, MovieImagesQuery>({
      query: ({ id, type = "STILL" }) => ({
        url: `films/${id}/images`,
        method: "get",
        params: { type: type },
      }),
    }),

    getMoviesByFilters: builder.query<MovieItems, Partial<FiltersType>>({
      query: (filters) => ({
        url: `films`,
        method: "get",
        params: { ...defaultFilters, ...filters, keyword: localStorage.getItem("keywords") || "" },
      }),
    }),

    getMoviesCollection: builder.query<MovieItems, MoviesCollections>({
      query: ({ type = "TOP_POPULAR_ALL", page = 1 }) => ({
        url: `films/collections`,
        method: "get",
        params: { type: type, page: page },
      }),
    }),

    getMoviesPremieres: builder.query<MovieItems, MoviesPremieres>({
      query: ({ year, month = "JANUARY" }) => ({
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
  useGetMovieImagesQuery,
} = moviesApi;

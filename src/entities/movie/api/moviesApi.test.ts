import { createReduxStore } from "@/app/store";
import { moviesApi } from "./moviesApi";

import { FiltersType } from "@/shared/model";
import { axiosBaseQuery } from "@/shared/config";

jest.mock("../../../shared/config/rtkQuery/axiosBaseQuery.ts");

const store = createReduxStore();

describe("Movies API", () => {
  describe("getMovie", () => {
    test("get movie by ID", async () => {
      const movieId = 1;
      const expectedMovie = { kinopoiskId: movieId };

      (axiosBaseQuery as jest.Mock).mockImplementation(() => async () => ({
        data: expectedMovie,
      }));

      const result = await store.dispatch(moviesApi.endpoints.getMovie.initiate(movieId));
      console.log(result);
      expect(result.data).toEqual(expectedMovie);
      expect(axiosBaseQuery).toHaveBeenCalledWith({
        url: `/films/${movieId}`,
        method: "get",
      });
    });
  });

  describe("getMoviesByFilters", () => {
    test("get movies by filters", async () => {
      const filters: FiltersType = {
        type: "FILM",
        yearFrom: 2012,
        yearTo: 2012,
        ratingFrom: 8,
        page: 1,
      };
      const expectedMovies = [{ type: "FILM", year: 2012, ratingKinopoisk: 8 }];

      (axiosBaseQuery as jest.Mock).mockImplementation(() => async () => ({
        data: expectedMovies,
      }));

      const result = await store.dispatch(moviesApi.endpoints.getMoviesByFilters.initiate(filters));
      expect(result.data).toEqual(expectedMovies);
      expect(axiosBaseQuery).toHaveBeenCalledWith({
        url: `/films`,
        method: "get",
        params: filters,
      });
    });
  });

  describe("getMoviesCollection", () => {
    test("get movies collection", async () => {
      const expectedMovies = [{ id: 1, title: "Top Movie" }];

      (axiosBaseQuery as jest.Mock).mockImplementation(() => async () => ({
        data: expectedMovies,
      }));

      const result = await store.dispatch(
        moviesApi.endpoints.getMoviesCollection.initiate({ type: "TOP_POPULAR_ALL", page: 1 }),
      );

      expect(result.data).toEqual(expectedMovies);
      expect(axiosBaseQuery).toHaveBeenCalledWith({
        url: `/films/collections`,
        method: "get",
        params: { type: "TOP_POPULAR_ALL", page: 1 },
      });
    });
  });

  describe("getMoviesPremieres", () => {
    test("get movies premieres with month", async () => {
      const year = 2024;
      const month = "AUGUST";
      const expectedMovies = [{ year: 2024, month: "AUGUST" }];

      (axiosBaseQuery as jest.Mock).mockImplementation(() => async () => ({
        data: expectedMovies,
      }));

      const result = await store.dispatch(
        moviesApi.endpoints.getMoviesPremieres.initiate({ year, month }),
      );
      expect(result.data).toEqual(expectedMovies);
      expect(axiosBaseQuery).toHaveBeenCalledWith({
        url: `/films/premieres`,
        method: "get",
        params: { year, month },
      });
    });

    test("get movies premieres without month", async () => {
      const year = 2024;
      const expectedMovies = [{ year: 2024 }];

      (axiosBaseQuery as jest.Mock).mockImplementation(() => async () => ({
        data: expectedMovies,
      }));

      const result = await store.dispatch(
        moviesApi.endpoints.getMoviesPremieres.initiate({ year }),
      );
      expect(result.data).toEqual(expectedMovies);
      expect(axiosBaseQuery).toHaveBeenCalledWith({
        url: `/films/premieres`,
        method: "get",
        params: { year },
      });
    });
  });
});

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersType } from "@/shared/model";
import { defaultFilters } from "@/shared/consts";

const filtersSlice = createSlice({
  name: "filters",
  initialState: defaultFilters,
  reducers: {
    setYearFilter(state, action: PayloadAction<number>) {
      state.yearTo = action.payload;
      state.yearFrom = action.payload;
    },

    setKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
    },

    setMoviesType(state, action: PayloadAction<FiltersType["type"]>) {
      state.type = action.payload;
    },

    setRating(state, action: PayloadAction<number>) {
      state.ratingFrom = action.payload;
    },
  },
});

export const { reducer: filtersSliceReducer, actions: filtersSliceActions } = filtersSlice;

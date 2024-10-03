export interface FiltersType {
  yearFrom: number;
  yearTo: number;
  ratingFrom: number;
  type: "FILM" | "TV_SHOW" | "TV_SERIES" | "MINI_SERIES" | "ALL";
  keyword?: string;
  page: number;
}

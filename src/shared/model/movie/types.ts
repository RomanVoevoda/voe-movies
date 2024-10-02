export interface MovieInfo {
  kinopoiskId: number;
  kinopoiskHDId: string;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries: CountriesInfo[];
  genres: GenreInfo[];
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}

export interface MoviesCollections {
  type:
    | "TOP_POPULAR_ALL"
    | "TOP_POPULAR_MOVIES"
    | "TOP_250_TV_SHOWS"
    | "TOP_250_MOVIES"
    | "VAMPIRE_THEME"
    | "COMICS_THEME"
    | "CLOSES_RELEASES"
    | "FAMILY"
    | "OSKAR_WINNERS_2021"
    | "LOVE_THEME"
    | "ZOMBIE_THEME"
    | "CATASTROPHE_THEME"
    | "KIDS_ANIMATION_THEME"
    | "POPULAR_SERIES";
  page: number;
}

export interface MoviesPremieres {
  year: number;
  month?:
    | "JANUARY"
    | "FEBRUARY"
    | "MARCH"
    | "APRIL"
    | "MAY"
    | "JUNE"
    | "JULY"
    | "AUGUST"
    | "SEPTEMBER"
    | "OCTOBER"
    | "NOVEMBER"
    | "DECEMBER";
}

interface CountriesInfo {
  country: string;
}

interface GenreInfo {
  genre: string;
}

import { ReactNode } from "react";

export interface MovieSectionProps
  extends MovieInfoProps,
    Omit<MovieCardProps, "year">,
    Pick<MovieRatingProps, "ratingImdb"> {
  type: "preview" | "full";

  description: string;
  buttons: ReactNode[];
}

export interface MovieCardProps extends Omit<MovieRatingProps, "ratingImdb"> {
  posterUrl: string;
  nameRu: string;
  year: number;
  onClick?: () => void;
}

export interface MovieRatingProps {
  ratingImdb?: number;
  ratingKinopoisk?: number;
}

export interface MovieInfoProps {
  year?: number;
  genre?: string;
  country?: string;
  gapColumns?: number;
  gapRows?: number;
}

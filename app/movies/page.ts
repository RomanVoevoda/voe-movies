import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VoeMovie | Поиск фильмов",
  authors: { name: "Roman Druzhinin", url: "https://github.com/RomanVoevoda" },
  description: "Find movies on VoeMovie",
  keywords:
    "movies, cinema, movies website, free movies, movies info, search movies, best movies, top 100",
};

export { MoviesPage as default } from "@/pages/MoviesPage";

import { Metadata } from "next";

interface MoviesIdPageProps {
  params: {
    id: string;
  };
}

export const generateMetadata = ({ params: { id } }: MoviesIdPageProps): Metadata => {
  return {
    title: `VoeMovie | ${id}`,
    authors: { name: "Roman Druzhinin", url: "https://github.com/RomanVoevoda" },
    description: "Страница фильма лалала",
    keywords:
      "movies, cinema, movies website, free movies, movies info, search movies, best movies, top 100",
  };
};

export { MoviesIdPage as default } from "@/pages/MoviesIdPage";

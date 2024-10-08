import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VoeMovie",
  authors: { name: "Roman Druzhinin", url: "https://github.com/RomanVoevoda" },
  description: "Simple website with information about movies",
  keywords: "movies, cinema, movies website, free movies, movies info",
};

export { HomePage as default } from "@/pages/HomePage";

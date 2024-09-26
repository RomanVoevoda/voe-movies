import type { Metadata } from "next";
import Providers from "../providers/Providers";
import "../styles/index.scss";

export const metadata: Metadata = {
  title: "VoeMovie",
  authors: { name: "Roman Druzhinin", url: "https://github.com/RomanVoevoda" },
  description: "Simple website with information about movies",
  keywords: "movies, cinema, movies website, free movies, movies info",
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: JSX.Element;
}>) => {
  return (
    <html lang="ru">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

import type { Metadata } from "next";
import Providers from "../Providers/Providers";
import "../styles/index.scss";
import { Header } from "@/widgets";

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
        <Providers>
          <>
            <Header />
            {children}
          </>
        </Providers>
      </body>
    </html>
  );
};

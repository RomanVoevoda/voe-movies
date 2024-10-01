import { screen } from "@testing-library/react";
import MovieSection from "./MovieSection";
import { Button } from "@/shared/ui";
import { renderTestApp } from "@/shared/utils";

describe("MovieSection", () => {
  const props = {
    posterUrl:
      "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/e6dd24cbe07ab6ecd0d31dedd58b870f/960x540",
    nameRu: "Название фильма",
    year: 2023,
    ratingKinopoisk: 8.5,
    ratingImdb: 7.5,
    description: "Описание фильма",
    genre: "Жанр",
    country: "Страна",
    gapColumns: 10,
    gapRows: 10,
    buttons: [<Button>Кнопка</Button>],
  };

  test("render MovieSection full", () => {
    renderTestApp(
      <MovieSection
        {...props}
        type={"full"}
      />,
    );

    expect(screen.getByTestId("MovieSection")).toBeInTheDocument();
    expect(screen.getByText("О фильме")).toBeInTheDocument();
    expect(screen.getByLabelText(`Информация о фильме ${props.nameRu}`)).toBeInTheDocument();
    expect(screen.getByText(props.nameRu)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(props.genre)).toBeInTheDocument();
    expect(screen.getByText(props.country)).toBeInTheDocument();
    expect(screen.getByText(props.year)).toBeInTheDocument();
    expect(screen.getByTestId("MovieImage")).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-kinopoisk-post-img%2F1539913%2Fe6dd24cbe07ab6ecd0d31dedd58b870f%2F960x540&w=16&q=75",
    );
    expect(screen.getByText(`КиноПоиск: ${props.ratingKinopoisk}/10`)).toBeInTheDocument();
    expect(screen.getByText(`IMDB: ${props.ratingImdb}/10`)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Кнопка/i })).toBeInTheDocument();
  });

  test("render MovieSection preview", () => {
    renderTestApp(
      <MovieSection
        {...props}
        type={"preview"}
      />,
    );

    expect(screen.getByTestId("MovieSection")).toBeInTheDocument();
    expect(screen.queryByText("О фильме")).not.toBeInTheDocument();
    expect(screen.getByLabelText(`Информация о фильме ${props.nameRu}`)).toBeInTheDocument();
    expect(screen.getByText(props.nameRu)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(props.genre)).toBeInTheDocument();
    expect(screen.getByText(props.country)).toBeInTheDocument();
    expect(screen.getByText(props.year)).toBeInTheDocument();
    expect(screen.getByTestId("MovieImage")).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-kinopoisk-post-img%2F1539913%2Fe6dd24cbe07ab6ecd0d31dedd58b870f%2F960x540&w=16&q=75",
    );
    expect(screen.getByText(`КиноПоиск: ${props.ratingKinopoisk}/10`)).toBeInTheDocument();
    expect(screen.getByText(`IMDB: ${props.ratingImdb}/10`)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Кнопка/i })).toBeInTheDocument();
  });
});

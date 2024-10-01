import { renderTestApp } from "@/shared/utils";
import { MovieCard } from "../..";
import { screen } from "@testing-library/dom";

const props = {
  posterUrl:
    "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/e6dd24cbe07ab6ecd0d31dedd58b870f/960x540",
  nameRu: "Card",
  year: 2008,
  ratingKinopoisk: 8,
};

describe("MovieCard", () => {
  test("render", () => {
    renderTestApp(<MovieCard {...props} />);
    const component = screen.getByTestId("MovieCard");
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("card");
    expect(screen.getByText(props.nameRu)).toBeInTheDocument();
    expect(screen.getByText(`${props.year}г.`)).toBeInTheDocument();
    expect(screen.getByText(`${props.ratingKinopoisk}/10`)).toBeInTheDocument();
  });

  test("image", () => {
    renderTestApp(<MovieCard {...props} />);
    const component = screen.getByTestId("MovieImage");
    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-kinopoisk-post-img%2F1539913%2Fe6dd24cbe07ab6ecd0d31dedd58b870f%2F960x540&w=16&q=75",
    );
    expect(component).toHaveClass("card__image");
  });
});

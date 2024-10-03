import { renderTestApp } from "@/shared/utils";
import { screen } from "@testing-library/dom";
import MovieBanner from "./MovieBanner";

const props = {
  posterUrl:
    "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/e6dd24cbe07ab6ecd0d31dedd58b870f/960x540",
  nameRu: "Banner",
  description: "Lala",
  announcement: "in Cinema",
};

describe("MovieBanner", () => {
  test("render", () => {
    renderTestApp(<MovieBanner {...props} />);
    const component = screen.getByTestId("MovieBanner");
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("banner");
    expect(screen.getByText(props.nameRu)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(props.announcement)).toBeInTheDocument();
  });

  test("image", () => {
    renderTestApp(<MovieBanner {...props} />);
    const component = screen.getByTestId("MovieImage");
    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-kinopoisk-post-img%2F1539913%2Fe6dd24cbe07ab6ecd0d31dedd58b870f%2F960x540&w=16&q=75",
    );
    expect(component).toHaveClass("banner__image");
  });
});

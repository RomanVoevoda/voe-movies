import { Meta, StoryObj } from "@storybook/react";
import MovieCard from "./MovieCard";

const meta = {
  title: "entities/MovieCard",
  component: MovieCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MovieCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    ratingKinopoisk: 9,
    posterUrl:
      "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/e6dd24cbe07ab6ecd0d31dedd58b870f/960x540",
    year: 1994,
    nameRu: "Побег из Шоушенка",
  },
};

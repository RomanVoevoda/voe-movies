import { Meta, StoryObj } from "@storybook/react";
import MovieBanner from "./MovieBanner";
import { Button } from "@/shared/ui";

const meta = {
  title: "entities/MovieBanner",
  component: MovieBanner,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MovieBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Banner: Story = {
  args: {
    posterUrl:
      "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/e6dd24cbe07ab6ecd0d31dedd58b870f/960x540",
    nameRu: "Побег из Шоушенка",
    description:
      "Исследуя заброшенную космическую станцию, группа колонизаторов сталкивается с самой ужасающей формой жизни во Вселенной.",
    announcement: "УЖЕ В КИНО",
    button: (
      <Button
        type="contained"
        color="pink"
      >
        Смотреть
      </Button>
    ),
  },
};

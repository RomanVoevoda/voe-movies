import { Meta, StoryObj } from "@storybook/react";
import MovieSection from "./MovieSection";
import { Button } from "@/shared/ui";

const meta = {
  title: "entities/MovieSection",
  component: MovieSection,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MovieSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PreviewSection: Story = {
  args: {
    ratingKinopoisk: 9,
    posterUrl:
      "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/e6dd24cbe07ab6ecd0d31dedd58b870f/960x540",
    year: 1994,
    nameRu: "Побег из Шоушенка",
    type: "preview",
    ratingImdb: 7,
    description:
      "В далеком будущем возвращающийся на Землю грузовой космический корабль перехватывает исходящий с неизвестной планеты сигнал. Экипаж, в соответствии с основными инструкциями, обязан найти и исследовать источник сигнала. Оказавшись на планете, астронавты повсюду обнаруживают предметы, по виду напоминающие гигантские коконы.",
    genre: "Ужасы, Фантастика",
    country: "Великомбритания",
    gapColumns: 50,
    gapRows: 20,
    buttons: [
      <Button
        type="contained"
        color="pink"
      >
        Смотреть
      </Button>,
      <Button
        type="outlined"
        color="pink"
      >
        В избранное
      </Button>,
    ],
  },
};

export const FullSection: Story = {
  args: {
    ratingKinopoisk: 9,
    posterUrl:
      "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/e6dd24cbe07ab6ecd0d31dedd58b870f/960x540",
    year: 1994,
    nameRu: "Побег из Шоушенка",
    type: "full",
    ratingImdb: 7,
    description:
      "В далеком будущем возвращающийся на Землю грузовой космический корабль перехватывает исходящий с неизвестной планеты сигнал. Экипаж, в соответствии с основными инструкциями, обязан найти и исследовать источник сигнала. Оказавшись на планете, астронавты повсюду обнаруживают предметы, по виду напоминающие гигантские коконы.",
    genre: "Ужасы, Фантастика",
    country: "Великомбритания",
    gapColumns: 50,
    gapRows: 20,
    buttons: [
      <Button
        type="contained"
        color="pink"
      >
        В избранное
      </Button>,
    ],
  },
};

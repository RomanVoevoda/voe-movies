import { Meta, StoryObj } from "@storybook/react";
import TextSlice from "./TextSlice";

const meta = {
  title: "shared/TextSlice",
  component: TextSlice,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextSlice>;

export default meta;

type Story = StoryObj<typeof meta>;

const children = "Lorem ipsum lallala wefregeh wbvierbgebr oewrgnoreg ewfffffffffffregreg";

export const Default: Story = {
  args: {
    children,
  },
};

export const ButtonsFont: Story = {
  args: {
    align: "center",
    size: "normal",
    children,
  },
};

export const BigTitleFont: Story = {
  args: {
    size: "titles_big",
    color: "dark_blue",
    family: "bold",
    children,
  },
};

export const SmallTitleFont: Story = {
  args: {
    size: "titles_small",
    color: "dark_blue",
    family: "medium",
    children,
  },
};

export const SmallBannersFont: Story = {
  args: {
    size: "banners_small",
    color: "blue",
    family: "medium",
    children,
  },
};

export const BigBannersFont: Story = {
  args: {
    size: "banners_big",
    color: "yellow",
    family: "medium",
    children,
  },
};

export const SmallGrayFont: Story = {
  args: {
    size: "small",
    color: "gray",
    children,
  },
};
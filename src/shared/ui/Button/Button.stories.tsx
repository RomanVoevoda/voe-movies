import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const children = "Button";

export const ContainedButton: Story = {
  args: {
    variant: "contained",
    color: "pink",
    children,
  },
};

export const OutlinedButton: Story = {
  args: {
    variant: "outlined",
    color: "dark_blue",
    children,
  },
};

export const TextButton: Story = {
  args: {
    variant: "text",
    color: "dark_blue",
    children,
  },
};

export const PaginationButton: Story = {
  args: {
    variant: "text",
    color: "dark_blue",
    size: "content",
    children: "1",
  },
};

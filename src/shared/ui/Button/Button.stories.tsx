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
    type: "contained",
    color: "pink",
    children,
  },
};

export const OutlinedButton: Story = {
  args: {
    type: "outlined",
    color: "dark_blue",
    children,
  },
};

export const TextButton: Story = {
  args: {
    type: "text",
    color: "dark_blue",
    children,
  },
};

export const PaginationButton: Story = {
  args: {
    type: "text",
    color: "dark_blue",
    size: "content",
    children: "1",
  },
};

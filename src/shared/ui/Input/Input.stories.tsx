import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "shared/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    type: "text",
    placeholder: "Введите текст",
    size: "normal",
  },
};

export const SearchInput: Story = {
  args: {
    type: "search",
    placeholder: "Поиск...",
    size: "normal",
  },
};

export const AdaptiveInput: Story = {
  args: {
    type: "search",
    placeholder: "Поиск...",
    size: "adaptive",
  },
};

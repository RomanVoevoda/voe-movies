import { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta = {
  title: "shared/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = {
  options: [
    "automobile",
    "wwwwwwwwwwwwqfewgggggggg",
    "wefregreg",
    "wefwef",
    "automobile",
    "wwwwwwwwwwwwqfewgggggggg",
    "wefregreg",
    "wefwef",
    "automobile",
    "wwwwwwwwwwwwqfewgggggggg",
    "wefregreg",
    "wefwef",
    "wef",
    "wefd",
  ],
  defaultOption: "Choose option",
};

export const SmallSelect: Story = {
  args: options,
};

import { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";

const meta = {
  title: "shared/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const XmarkBigIcon: Story = {
  args: {
    type: "xmark",
    color: "dark_blue",
    size: "big",
  },
};

export const AngleSmallRightIcon: Story = {
  args: {
    color: "dark_blue",
    size: "small",
    direction: "right",
  },
};

export const AngleNormalLeftIcon: Story = {
  args: {
    color: "dark_blue",
    size: "normal",
    direction: "left",
  },
};

export const SearchIcon: Story = {
  args: {
    type: "search",
    color: "translucent",
    size: "small",
  },
};

export const InteractiveIcon: Story = {
  args: {
    color: "translucent",
    size: "big",
    interactive: true,
  },
};

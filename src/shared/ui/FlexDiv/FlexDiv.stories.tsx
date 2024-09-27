import { Meta, StoryObj } from "@storybook/react";
import FlexDiv from "./FlexDiv";

const meta = {
  title: "shared/FlexDiv",
  component: FlexDiv,
  parameters: {
    style: { height: "100dvh" },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FlexDiv>;

export default meta;

type Story = StoryObj<typeof meta>;

const children = (
  <>
    <div style={{ background: "red", padding: "8px" }}>Block 1</div>
    <div style={{ background: "green", padding: "10px" }}>Block 2</div>
    <div style={{ background: "blue", padding: "12px" }}>Block 3</div>
    <div style={{ background: "red", padding: "8px" }}>Block 4</div>
    <div style={{ background: "green", padding: "10px" }}>Block 5</div>
    <div style={{ background: "blue", padding: "12px" }}>Block 6</div>
  </>
);

export const Default: Story = {
  args: {
    children,
  },
};

export const JustifyCenter: Story = {
  args: {
    justify: "center",
    children,
  },
};

export const JustifyEnd: Story = {
  args: {
    justify: "end",
    children,
  },
};

export const ColumnDirection: Story = {
  args: {
    direction: "column",
    children,
  },
};

export const ColumnReverse: Story = {
  args: {
    direction: "column_reverse",
    children,
  },
};

export const RowReverse: Story = {
  args: {
    direction: "row_reverse",
    children,
  },
};

export const NoWrap: Story = {
  args: {
    wrap: "nowrap",
    children,
  },
};

export const GiantGap: Story = {
  args: {
    gap: 100,
    children,
  },
};

import { renderTestApp } from "@/shared/utils";
import FlexDiv, { FlexDivProps } from "./FlexDiv";
import { screen } from "@testing-library/dom";

const render = (props: FlexDivProps, className: string) => {
  renderTestApp(<FlexDiv {...props} />);
  const component = screen.getByTestId("FlexDiv");
  expect(component).toHaveClass(className);
};

describe("FlexDiv", () => {
  test("render", () => {
    renderTestApp(<FlexDiv />);
    const component = screen.getByTestId("FlexDiv");
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("flex");
  });

  describe("justify", () => {
    test("start", () => {
      render({ justify: "start" }, "flex_justify_start");
    });

    test("center", () => {
      render({ justify: "center" }, "flex_justify_center");
    });

    test("end", () => {
      render({ justify: "end" }, "flex_justify_end");
    });
  });

  describe("align", () => {
    test("start", () => {
      render({ align: "start" }, "flex_align_start");
    });

    test("center", () => {
      render({ align: "center" }, "flex_align_center");
    });

    test("end", () => {
      render({ align: "end" }, "flex_align_end");
    });
  });

  describe("direction", () => {
    test("row", () => {
      render({ direction: "row" }, "flex_row");
    });

    test("row_reverse", () => {
      render({ direction: "row_reverse" }, "flex_row_reverse");
    });

    test("column", () => {
      render({ direction: "column" }, "flex_column");
    });

    test("column_reverse", () => {
      render({ direction: "column_reverse" }, "flex_column_reverse");
    });
  });

  describe("wrap", () => {
    test("wrap", () => {
      render({ wrap: "wrap" }, "flex_wrap");
    });

    test("nowrap", () => {
      render({ wrap: "nowrap" }, "flex_nowrap");
    });
  });

  describe("gap", () => {
    test("gap", () => {
      const gapValue = 20;
      render({ gap: gapValue }, "flex");
      const component = screen.getByTestId("FlexDiv");
      expect(component).toHaveStyle(`gap: ${gapValue}px`);
    });
  });

  describe("extra class", () => {
    test("extra class", () => {
      render({ extraClass: "div" }, "div");
    });
  });
});

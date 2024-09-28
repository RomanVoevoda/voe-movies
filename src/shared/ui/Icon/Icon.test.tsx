import { renderTestApp } from "@/shared/utils";
import { IconFactoryProps } from "./types";
import Icon from "./Icon";
import { fireEvent, screen } from "@testing-library/dom";

const render = (
  props: IconFactoryProps,
  testId: string = "angle-icon",
  className: string = "icon",
) => {
  renderTestApp(<Icon {...props} />);
  const component = screen.getByTestId(testId);
  expect(component).toHaveClass(className);
};

describe("Icon", () => {
  test("render", () => {
    renderTestApp(<Icon />);
    const component = screen.getByTestId("angle-icon");
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("icon");
    expect(component).toHaveClass("icon_gray");
    expect(component).toHaveClass("icon_small");
    expect(component).toHaveClass("icon_bottom");
  });

  describe("type", () => {
    test("angle", () => {
      render({ type: "angle" }, "angle-icon");
      expect(screen.getByTestId("angle-icon")).toBeInTheDocument();
    });

    test("xmark", () => {
      render({ type: "xmark" }, "xmark-icon");
      expect(screen.getByTestId("xmark-icon")).toBeInTheDocument();
    });

    test("search", () => {
      render({ type: "search" }, "search-icon");
      expect(screen.getByTestId("search-icon")).toBeInTheDocument();
    });
  });

  describe("color", () => {
    test("gray", () => {
      render({ color: "gray" }, "angle-icon", "icon_gray");
    });

    test("transcluent", () => {
      render({ color: "transcluent" }, "angle-icon", "icon_transcluent");
    });

    test("white", () => {
      render({ color: "white" }, "angle-icon", "icon_white");
    });

    test("dark_blue", () => {
      render({ color: "dark_blue" }, "angle-icon", "icon_dark_blue");
    });
  });

  describe("size", () => {
    test("small", () => {
      render({ size: "small" }, "angle-icon", "icon_small");
    });

    test("normal", () => {
      render({ size: "normal" }, "angle-icon", "icon_normal");
    });

    test("big", () => {
      render({ size: "big" }, "angle-icon", "icon_big");
    });
  });

  describe("direction", () => {
    test("bottom", () => {
      render({ direction: "bottom" }, "angle-icon", "icon_bottom");
    });

    test("right", () => {
      render({ direction: "right" }, "angle-icon", "icon_right");
    });

    test("left", () => {
      render({ direction: "left" }, "angle-icon", "icon_left");
    });

    test("top", () => {
      render({ direction: "top" }, "angle-icon", "icon_top");
    });
  });

  describe("aria-label", () => {
    test("aria-label Angle", () => {
      render({ ariaLabel: "angle-icon" });
      const component = screen.getByTestId("angle-icon");
      expect(component).toHaveAttribute("aria-label", "angle-icon");
    });

    test("aria-label Xmark", () => {
      render({ ariaLabel: "xmark-icon", type: "xmark" }, "xmark-icon");
      const component = screen.getByTestId("xmark-icon");
      expect(component).toHaveAttribute("aria-label", "xmark-icon");
    });

    test("aria-label Search", () => {
      render({ ariaLabel: "search-icon", type: "search" }, "search-icon");
      const component = screen.getByTestId("search-icon");
      expect(component).toHaveAttribute("aria-label", "search-icon");
    });
  });

  describe("click event", () => {
    test("click event Angle", () => {
      let value = 0;
      render({ onClick: () => (value += 5) });
      const component = screen.getByTestId("angle-icon");
      fireEvent.click(component);
      expect(value).toEqual(5);
    });

    test("click event Xmark", () => {
      let value = 0;
      render({ onClick: () => (value += 5), type: "xmark" }, "xmark-icon");
      const component = screen.getByTestId("xmark-icon");
      fireEvent.click(component);
      expect(value).toEqual(5);
    });

    test("click event Search", () => {
      let value = 0;
      render({ onClick: () => (value += 5), type: "search" }, "search-icon");
      const component = screen.getByTestId("search-icon");
      fireEvent.click(component);
      expect(value).toEqual(5);
    });
  });
});

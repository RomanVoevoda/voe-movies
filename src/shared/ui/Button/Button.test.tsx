import { renderTestApp } from "@/shared/utils";
import Button, { ButtonProps } from "./Button";
import { fireEvent, screen } from "@testing-library/dom";

const children = "Button";

const render = (props: ButtonProps, className: string = "button_contained") => {
  renderTestApp(<Button {...props} />);
  const component = screen.getByTestId("Button");
  expect(component).toHaveClass(className);
};

describe("Button", () => {
  test("render", () => {
    renderTestApp(<Button>{children}</Button>);
    const component = screen.getByTestId("Button");
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("button");
    expect(component).toHaveClass("button_contained");
    expect(component).toHaveClass("button_contained_pink");
  });

  describe("color", () => {
    test("pink", () => {
      render({ color: "pink", children }, "button_contained_pink");
    });

    test("dark_blue", () => {
      render({ color: "dark_blue", children }, "button_contained_dark_blue");
    });

    test("white", () => {
      render({ color: "white", children }, "button_contained_white");
    });

    test("gray", () => {
      render({ color: "gray", children }, "button_contained_gray");
    });
  });

  describe("type", () => {
    test("contained", () => {
      render({ type: "contained", children }, "button_contained");
    });

    test("outlined", () => {
      render({ type: "outlined", children }, "button_outlined");
    });

    test("text", () => {
      render({ type: "text", children }, "button_text");
    });
  });

  describe("size", () => {
    test("normal", () => {
      render({ size: "normal", children }, "button_normal");
    });
  });

  describe("submit", () => {
    test("button", () => {
      render({ children });
      const component = screen.getByTestId("Button");
      expect(component).toHaveAttribute("type", "button");
    });

    test("submit", () => {
      render({ submit: true, children });
      const component = screen.getByTestId("Button");
      expect(component).toHaveAttribute("type", "submit");
    });
  });

  describe("click event", () => {
    test("click event", () => {
      let value = 0;
      render({ children, onClick: () => (value += 5) });
      const component = screen.getByTestId("Button");
      fireEvent.click(component);
      expect(value).toEqual(5);
    });
  });
});

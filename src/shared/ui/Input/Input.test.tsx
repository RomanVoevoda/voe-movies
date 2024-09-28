import { renderTestApp } from "@/shared/utils";
import Input, { InputProps } from "./Input";
import { fireEvent, screen } from "@testing-library/dom";

const render = (props: InputProps, className: string = "input") => {
  renderTestApp(<Input {...props} />);
  const component = screen.getByTestId("Input");
  expect(component).toHaveClass(className);
};

const renderByAttribute = (props: InputProps, attribute: string, type: string) => {
  renderTestApp(<Input {...props} />);
  const component = screen.getByTestId("Input");
  expect(component).toHaveAttribute(attribute, type);
};

describe("Input", () => {
  test("render", () => {
    renderTestApp(<Input />);
    const component = screen.getByTestId("Input");
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("input");
  });

  describe("size", () => {
    test("normal", () => {
      render({ size: "normal" }, "input_normal");
    });
  });

  describe("type", () => {
    test("text", () => {
      renderByAttribute({ type: "text" }, "type", "text");
    });

    test("search", () => {
      renderByAttribute({ type: "search" }, "type", "search");
    });
  });

  describe("aria-label", () => {
    test("aria-label", () => {
      renderByAttribute({ ariaLabel: "input label" }, "aria-label", "input label");
    });
  });

  describe("id", () => {
    test("id", () => {
      renderByAttribute({ id: "input id" }, "id", "input id");
    });
  });

  describe("name", () => {
    test("name", () => {
      renderByAttribute({ id: "input id" }, "name", "input id");
    });
  });

  describe("label", () => {
    test("label", () => {
      renderByAttribute({ id: "input id", label: "wowosa" }, "id", "input id");
      const component = screen.getByTestId("InputLabel");
      expect(component).toBeInTheDocument();
      expect(component).toHaveAttribute("for", "input id");
      expect(component).toHaveTextContent("wowosa");
    });
  });

  describe("change event", () => {
    test("change event", () => {
      let value = 0;
      render({ onChange: () => (value += 5) });
      const component = screen.getByTestId("Input");
      fireEvent.change(component, { target: { value: "some text" } });
      expect(value).toEqual(5);
    });
  });
});

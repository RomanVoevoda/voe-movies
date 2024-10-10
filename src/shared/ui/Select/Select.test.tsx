import { renderTestApp } from "@/shared/utils";
import Select, { SelectProps } from "./Select";
import { fireEvent, screen } from "@testing-library/dom";
import { ChangeEvent } from "react";

const mockOptions = ["automobile", "wwwwwwwwwwwwqfewgggggggg", "wefregreg", "wefwef", "automobile"];

const render = (props: Partial<SelectProps>, className: string = "select") => {
  renderTestApp(
    <Select
      {...props}
      options={mockOptions}
      defaultOption=""
    />,
  );
  const component = screen.getByTestId("Select");
  expect(component).toHaveClass(className);
};

const renderByAttribute = (props: Partial<SelectProps>, attribute: string, type: string) => {
  renderTestApp(
    <Select
      {...props}
      options={mockOptions}
      defaultOption={props.defaultOption || ""}
    />,
  );
  const component = screen.getByTestId("Select");
  expect(component).toHaveAttribute(attribute, type);
};

describe("Select", () => {
  test("render", () => {
    render({}, "select");
  });

  describe("small", () => {
    test("small", () => {
      render({ size: "small" }, "select_small");
    });
  });

  describe("color", () => {
    test("gray", () => {
      render({ color: "gray" }, "select_gray");
    });
  });

  describe("aria-label", () => {
    test("aria-label", () => {
      renderByAttribute({ ariaLabel: "select label" }, "aria-label", "select label");
    });
  });

  describe("id", () => {
    test("id", () => {
      renderByAttribute({ id: "select id" }, "id", "select id");
    });
  });

  describe("label", () => {
    test("defaultOption", () => {
      render({ label: "Choose" }, "select");
      expect(screen.getByTestId("Label")).toBeInTheDocument();
      expect(screen.getByTestId("Label")).toHaveTextContent("Choose");
    });
  });

  describe("select change event", () => {
    test("calls onChange prop when an option is selected", () => {
      const changeHandler = jest.fn();
      render({ onChange: changeHandler }, "select");
      fireEvent.click(screen.getByTestId("Select"));
      fireEvent.click(screen.getByTestId("Option automobile"));
      expect(changeHandler).toHaveBeenCalled();
    });

    test("value change on click", () => {
      let value = "";

      const mockOnChage = jest.fn((e: ChangeEvent<HTMLSelectElement>) => {
        value = e.target.value;
      });

      render({ onChange: mockOnChage }, "select");
      fireEvent.click(screen.getByTestId("Select"));
      fireEvent.click(screen.getByTestId("Option automobile"));
      expect(mockOnChage).toHaveBeenCalled();
      expect(value).toEqual("automobile");
    });

    test("does not call onChange when clicking outside", () => {
      const changeHandler = jest.fn();
      render({ onChange: changeHandler }, "select");
      fireEvent.click(screen.getByTestId("Select"));
      fireEvent.click(document.body);
      expect(changeHandler).not.toHaveBeenCalled();
    });
  });

  describe("options-container", () => {
    test("click on select", () => {
      render({}, "select");
      fireEvent.click(screen.getByTestId("Select"));
      expect(screen.getByTestId("options-container")).toHaveClass("select__options_open");
      fireEvent.click(screen.getByTestId("Select"));
      expect(screen.getByTestId("options-container")).not.toHaveClass("select__options_open");
    });

    test("container is open, click outside", () => {
      render({}, "select");
      fireEvent.click(screen.getByTestId("Select"));

      fireEvent.click(document.body);

      expect(screen.getByTestId("options-container")).not.toHaveClass("select__options_open");
    });

    test("container is open, click on option", () => {
      render({}, "select");
      fireEvent.click(screen.getByTestId("Select"));

      fireEvent.click(screen.getByTestId("Option wefwef"));

      expect(screen.getByTestId("options-container")).not.toHaveClass("select__options_open");
    });
  });
});

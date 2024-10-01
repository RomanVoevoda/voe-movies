import { renderTestApp } from "@/shared/utils";
import TextSlice, { TextSliceProps } from "./TextSlice";
import { screen } from "@testing-library/dom";

const render = (props: TextSliceProps, className: string) => {
  renderTestApp(<TextSlice {...props} />);
  const component = screen.getByTestId("TextSlice");
  expect(component).toHaveClass(className);
};

describe("TextSlice", () => {
  test("render", () => {
    renderTestApp(<TextSlice />);
    const component = screen.getByTestId("TextSlice");
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("text");
  });

  describe("align", () => {
    test("start", () => {
      render({ align: "start" }, "text_align_start");
    });

    test("center", () => {
      render({ align: "center" }, "text_align_center");
    });

    test("end", () => {
      render({ align: "end" }, "text_align_end");
    });
  });

  describe("color", () => {
    test("black", () => {
      render({ color: "black" }, "text_color_black");
    });

    test("dark_blue", () => {
      render({ color: "dark_blue" }, "text_color_dark_blue");
    });

    test("blue", () => {
      render({ color: "blue" }, "text_color_blue");
    });

    test("light_gray", () => {
      render({ color: "light_gray" }, "text_color_light_gray");
    });

    test("gray", () => {
      render({ color: "gray" }, "text_color_gray");
    });

    test("yellow", () => {
      render({ color: "yellow" }, "text_color_yellow");
    });

    test("white", () => {
      render({ color: "white" }, "text_color_white");
    });

    test("pink", () => {
      render({ color: "pink" }, "text_color_pink");
    });

    test("transcluent", () => {
      render({ color: "transcluent" }, "text_color_transcluent");
    });
  });

  describe("family", () => {
    test("regular", () => {
      render({ family: "regular" }, "text_family_regular");
    });

    test("medium", () => {
      render({ family: "medium" }, "text_family_medium");
    });

    test("bold", () => {
      render({ family: "bold" }, "text_family_bold");
    });
  });

  describe("size", () => {
    test("small", () => {
      render({ size: "small" }, "text_size_small");
    });

    test("normal", () => {
      render({ size: "normal" }, "text_size_normal");
    });

    test("big", () => {
      render({ size: "big" }, "text_size_big");
    });

    test("extra_big", () => {
      render({ size: "extra_big" }, "text_size_extra_big");
    });

    test("titles_extra_small", () => {
      render({ size: "titles_extra_small" }, "text_size_titles_extra_small");
    });

    test("titles_small", () => {
      render({ size: "titles_small" }, "text_size_titles_small");
    });

    test("titles_medium", () => {
      render({ size: "titles_medium" }, "text_size_titles_medium");
    });

    test("titles_big", () => {
      render({ size: "titles_big" }, "text_size_titles_big");
    });
  });

  describe("indent", () => {
    test("indent", () => {
      const indentValue = 20;
      render({ indent: indentValue }, "text");
      const component = screen.getByTestId("TextSlice");
      expect(component).toHaveStyle(`text-indent: ${indentValue}px`);
    });
  });
});

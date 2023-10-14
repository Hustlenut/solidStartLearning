import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@solidjs/testing-library";
import Test from "~/routes/test";
import { createRoot } from "solid-js";


describe("Test component", () => {
  let dispose: any;
  //This hook runs before every single test (it block) in the current describe block
  beforeEach(() => {
    createRoot((disposer) => {
      dispose = disposer;
      render(() => <Test />);
    });
  });
  //This hook runs after every single test (it block) in the current describe block.
  afterEach(() => {
    if (dispose) dispose();
  });

  it("should render Hello World", () => {
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeTruthy();
  });

  it("should update text on button click", () => {
    const buttonElement = screen.getByText("Press Me");
    fireEvent.click(buttonElement);
    expect(screen.getByText("IT WORKS!")).toBeTruthy();
  });
});



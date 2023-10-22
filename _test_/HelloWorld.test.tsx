import { render } from "@solidjs/testing-library";
import "@testing-library/jest-dom";
import Test from '../src/routes/test'

describe("Test Component", () => {
  it("renders 'Hello World'", () => {
    const { getByText } = render(() => <Test />);

    expect(getByText("Hello World")).toBeInTheDocument();
  });

  it("renders initial string", () => {
    const { getByText } = render(() => <Test />);

    expect(getByText("At least it's rendering...")).toBeInTheDocument();
  });
});
### Using before- and afterEach to start and clean up isolated computational instances

`beforeEach` and `afterEach` are hooks commonly used in testing libraries/frameworks to perform setup and cleanup actions before and after each individual test, respectively. They are part of a set of lifecycle hooks that allow you to manage the test environment and ensure that each test runs in a consistent state.

Here's a breakdown:

1. **`beforeEach`** :

* This hook runs before every single test (`it` block) in the current `describe` block.
* It's typically used for setup operations, such as initializing variables, rendering components, or creating mock functions.
* It ensures that each test starts from a clean and consistent state, reducing the chance of one test's side effects affecting another.

1. **`afterEach`** :

* This hook runs after every single test (`it` block) in the current `describe` block.
* It's typically used for cleanup operations, like disposing of resources, unmounting components, or resetting mock states.
* Its primary purpose is to prevent side effects from lingering after a test completes, ensuring that subsequent tests aren't affected by any leftover state or behaviors.

Besides these, there are also:

* **`beforeAll`** : Runs once before all tests in the current `describe` block.
* **`afterAll`** : Runs once after all tests in the current `describe` block.

For example:

```typescript
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

```

Meanwhile if we were to use only an instance of computation, "createRoot()" should be under "it()":

```typescript
describe("Test component", () => {
  it("should render Hello World", () => {
    createRoot((dispose) => {
      render(() => <Test />);
      const helloWorldElement = screen.getByText("Hello World");
      expect(helloWorldElement).toBeTruthy();
      dispose();
    });
  });
});

```

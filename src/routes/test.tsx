import { createSignal } from "solid-js";

export default function Test() {
  const [aString, setString] = createSignal("At least it's rendering...");

  const handleOnclick = () => {
    setString("IT WORKS!");
  };
  return (
    <main>
      <h1>Hello World</h1>
      <h3>{aString()}</h3>
      <button onclick={handleOnclick}>Press Me</button>
    </main>
  );
}

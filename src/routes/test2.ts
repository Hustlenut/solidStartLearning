import { createEffect, createSignal, onCleanup } from "solid-js";

export default function Test2() {
  // Create a dummy signal to force the component to execute its logic.
  const [_, setDummy] = createSignal();

  setDummy('ok');
  // Log a message to the console when the component mounts.
  console.log("Entered the test2 page!");

  // Use onCleanup to log a message when the component unmounts.
  onCleanup(() => {
    console.log("Exiting the test2 page!");
  });

  return null;
}

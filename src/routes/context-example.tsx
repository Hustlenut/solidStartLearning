import { createSignal } from "solid-js";
import CounterComponent from "~/components/CreateContextExample/CounterComponent";
import { CounterProvider } from "~/components/CreateContextExample/CounterProvider";

export default function ContextExample() {
    return (
      <main>
        <CounterProvider count={5}>
            <CounterComponent />
        </CounterProvider>
      </main>
    );
  }
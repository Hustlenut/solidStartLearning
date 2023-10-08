import { createSignal } from "solid-js";
import CounterComponent from "~/components/CreateContextExample/CounterComponent";
import { CounterProvider } from "~/components/CreateContextExample/CounterProvider";

/**For some reason, this page needs an additional render 
 * after something is changed after the initial load, to work.
 * This is not the case in SolidJs...
 */
export default function ContextExample() {
    return (
      <main>
        <CounterProvider count={5}>
            <CounterComponent />
        </CounterProvider>
      </main>
    );
  }
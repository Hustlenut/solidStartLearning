import { JSXElement, createContext } from "solid-js";
import { createStore } from "solid-js/store";
import { CounterStore } from "./CustomTypes";
import { createCounter } from "./CounterLogic";

// Create context with explicit type
export const CounterContext = createContext<CounterStore | undefined>(undefined);

export function CounterProvider(props: any): JSXElement {
  
  const counter: CounterStore = createCounter(props.count || 0);

  return (
    <>
    <p>---------------------------------------------------------------------</p>
    {/**Later on, when using this component like so:
     * <CounterProvider count={5}></CounterProvider>
     * It will pass the value of the array of object literals, counter
     * to its children.
     */}
    <CounterContext.Provider value={counter}>
      {props.children}
    </CounterContext.Provider>
    <p>---------------------------------------------------------------------</p>
    </>
  );
}
import { JSXElement, createContext } from "solid-js";
import { createStore } from "solid-js/store";

// Custom defined types
type CounterState = { count: number };
/*
This indicates that any value of type CounterState should be an object
with a property named count that is of type number. Like "count: 5".
 */
type CounterActions = {
  increment: () => void; //void means absence of any return
  decrement: () => void;
};
type CounterStore = [CounterState, CounterActions];

// Create context with explicit type
export const CounterContext = createContext<CounterStore | undefined>(undefined);

export function CounterProvider(props: any): JSXElement {
  const [state, setState] = createStore({ count: props.count || 0 }); //? What has props.count to do with the whole picture of things?
  /**The props.count refers to the count prop passed to CounterProvider
     * when it's used (e.g., <CounterProvider count={5}></CounterProvider>). 
     * If the count prop isn't provided or its value is falsy (e.g., 0, null, undefined, etc.),
     * the count will default to 0. */
  
  //Declaring an array of object literals
  const counter: CounterStore = [
    state, //The type of state will automatically fall under CounterState
    {//While this object will fall under type CounterActions
      increment() {
        setState("count", (c: number) => c + 1);
      },
      decrement() {
        setState("count", (c: number) => c - 1);
      },
    },
  ];
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
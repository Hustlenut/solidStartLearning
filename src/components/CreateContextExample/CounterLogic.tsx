import { createStore } from "solid-js/store";
import { CounterActions, CounterStore } from "./CustomTypes";


//This function returns a CounterStore based on the given initial count
export function createCounter(initialCount: number = 0): CounterStore {
    const [state, setState] = createStore({ count: initialCount });
  
    const actions: CounterActions = {
      increment() {
        setState("count", (c: number) => c + 1);
      },
      decrement() {
        setState("count", (c: number) => c - 1);
      },
    };
  
    return [state, actions];
  }
  

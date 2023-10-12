// Custom defined types
export type CounterState = { count: number };
/*
This indicates that any value of type CounterState should be an object
with a property named count that is of type number. Like "count: 5".
 */
export type CounterActions = {
  increment: () => void; //void means absence of any return
  decrement: () => void;
};
export type CounterStore = [CounterState, CounterActions];
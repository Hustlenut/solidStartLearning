import { useContext } from "solid-js";
import { CounterContext } from "./CounterProvider";


export default function CounterComponent() {
    const counter = useContext(CounterContext);
  
    if (!counter) {
      throw new Error("CounterComponent must be used within a CounterProvider");
    }
    //Destructure the context object into its original array form. 
    const [state, actions] = counter;
  
    return (
      <div>
        <p>Count: {state.count}</p>
        {/**This property "count" is declared in the custom type "CounterState".
         *  "state" is ultimately coming from "createCounter()" in CounterLogic.
         */}
        <button onClick={actions.increment}>Increment</button>
        <button onClick={actions.decrement}>Decrement</button>
      </div>
    );
  }
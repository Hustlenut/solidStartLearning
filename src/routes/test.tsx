import { createSignal } from "solid-js";

export default function Test() {
    const [aString, setString] = createSignal("At least it's rendering...");

    const handleOnclick = () => {
        setString("IT WORKS!");
    }
    return(
        <main>
        <h1>{aString()}</h1>
        <button onclick={handleOnclick}>Press Me</button>
        </main>
    )
}
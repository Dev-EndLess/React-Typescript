import { useState } from "react";
import Heading from "./components/Heading";
import { Section } from "./components/Section";
import { Counter } from "./components/Counter";
import { List } from "./components/List"
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>React + Typescript</h1>
      <Heading title={"Hi Dude!"} />
      <hr />
      <Section title={"Props Title"}>Children Title</Section>
      <hr />
      <Counter setCount={setCount}>Count is {count}</Counter>
      <hr />
      <List items={["🍺 Beer", "🍕 Pizza", "💻 Code"]} render={(item: string) => <span className="gold">{item}</span>} />
    </div>
  );
}

export default App;

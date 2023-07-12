import { ReactNode } from "react"
import { useCounter } from "./context/CounterContext"
import { useCounterText } from "./context/CounterContext"
import './index.css'

type ChildrenType = {
  children: (num: number) => ReactNode
}

const Counter = ({ children }: ChildrenType) => {
  const { count, reset, increment, decrement, double} = useCounter()
  const { text, handleTextInput } = useCounterText()


  return (
    <div>
      <h1>{children(count)}</h1>
      <button onClick={reset}> RESET </button>
      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
      <button onClick={double}> x2 </button>
      <br />
      <br />
      <input type="text" onChange={handleTextInput} />
      <h2>{text}</h2>
    </div>
  )
}

export default Counter

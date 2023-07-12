import Counter from './Counter'
import { CounterProvider } from './context/CounterContext'
import { initialState } from './context/CounterContext'
import './index.css'

function App() {

  return (
    <>
    <CounterProvider count={initialState.count} text={initialState.text}>
    <Counter>{(num: number) => <div>Current Count: {num}</div>}</Counter>
    </CounterProvider>
    </>
  )
}

export default App
import Counter from './Counter'
import './index.css'

function App() {

  return (
    <>
    <Counter>{(num: number) => <div>Current Count: {num}</div>}</Counter>
    </>
  )
}

export default App
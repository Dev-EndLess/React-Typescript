import { ChangeEvent, ReactNode, useReducer } from "react"
import './index.css'

const initialState = { count: 0, text: '' }

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  DOUBLE,
  NEW_INPUT,
  RESET
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE
  payload?: string
}

const reducer = (state: typeof initialState, action: ReducerAction): typeof initialState => {
  switch(action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }
    case REDUCER_ACTION_TYPE.DOUBLE:
      return { ...state, count: state.count + 2 }
    case REDUCER_ACTION_TYPE.RESET:
      return { ...state, count: state.count = 0 }
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? '' }
    default:
      throw new Error() 
  }
}

type ChildrenType = {
  children: (num: number) => ReactNode
}

const Counter = ({ children }: ChildrenType) => {
  //const [count, setCount] = useState(1)
  const [state, dispatch] = useReducer(reducer, initialState)

  const reset = () => dispatch({ type: REDUCER_ACTION_TYPE.RESET})
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
  const double = () => dispatch({ type: REDUCER_ACTION_TYPE.DOUBLE})
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => 
    dispatch({ 
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value
    })

  return (
    <div>
      <h1>{children(state.count)}</h1>
      <button onClick={reset}> RESET </button>
      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
      <button onClick={double}> x2 </button>
      <br />
      <br />
      <input type="text" onChange={handleTextInput} />
      <h2>{state.text}</h2>
    </div>
  )
}

export default Counter

import { createContext, useReducer, ChangeEvent, ReactElement, useCallback, useContext } from "react";

type StateType = {
  count: number;
  text: string;
}

export const initialState: StateType = { 
  count: 0, 
  text: '' 
}

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

const reducer = (state: StateType, action: ReducerAction): StateType => {
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

const useCounterContext = (initialState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const reset = () => dispatch({ type: REDUCER_ACTION_TYPE.RESET})
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
  const double = () => dispatch({ type: REDUCER_ACTION_TYPE.DOUBLE})
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => 
    dispatch({ 
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value
    })

    return { state, increment, decrement, double, reset, handleTextInput}
}

type UseCounterContextType = ReturnType<typeof useCounterContext>

const initialContextState: UseCounterContextType = {
  state: initialState,
  reset: () => {},
  increment: () => {},
  decrement: () => {},
  double: () => {},
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {},
}

export const CounterContext = createContext<UseCounterContextType>(initialContextState)

type ChildrenType = {
  children?: ReactElement | undefined
}

export const CounterProvider = ({
  children, ...initialState
}: ChildrenType & StateType): ReactElement => {
  return ( 
    <CounterContext.Provider value={useCounterContext(initialState)}>
      {children}
    </CounterContext.Provider>
  )
}

type UseConterHookType = {
  count: number,
  reset: () => void
  decrement: () => void
  increment: () => void
  double: () => void
}

export const useCounter = (): UseConterHookType => {
  const { state: {count}, reset, increment, decrement, double} = useContext(CounterContext)
  return { count, reset, increment, decrement, double }
}

type UseCounterTextHookType = {
  text: string,
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const useCounterText = ():UseCounterTextHookType => {
  const { state: {text}, handleTextInput} = useContext(CounterContext)
  return { text, handleTextInput }
}
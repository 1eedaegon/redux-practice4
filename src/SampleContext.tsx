import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type Color = 'red' | 'blud' | 'green';
type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};
type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'TOGGLE_ISGOOD' };

type SampleDispatch = Dispatch<Action>;

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count,
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color,
      };
    case 'TOGGLE_ISGOOD':
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error('Unknown action type');
  }
}

export function SampleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true,
  });

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error('Cannot find Sample provider');
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find Sample dispatcher');
  return dispatch;
}

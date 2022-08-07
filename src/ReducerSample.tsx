import { useReducer } from 'react';

type Color = 'red' | 'orange' | 'yellow';

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

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return { ...state, count: action.count };
    case 'SET_TEXT':
      return { ...state, text: action.text };
    case 'SET_COLOR':
      return { ...state, color: action.color };
    case 'TOGGLE_ISGOOD':
      return { ...state, isGood: !state.isGood };
    default:
      throw new Error('Unhandled action');
  }
}

function ReducerSample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true,
  });
  const setCountToFive = () => dispatch({ type: 'SET_COUNT', count: 5 });
  const setTextToBye = () => dispatch({ type: 'SET_TEXT', text: 'bye' });
  const setColorToYellow = () =>
    dispatch({ type: 'SET_COLOR', color: 'yellow' });
  const toggleGood = () => dispatch({ type: 'TOGGLE_ISGOOD' });
  return (
    <div>
      <p>
        <code>count: </code>
        {state.count}
      </p>
      <p>
        <code>text: </code>
        {state.text}
      </p>
      <p>
        <code>color: </code>
        {state.color}
      </p>
      <p>
        <code>isGood: </code>
        {state.isGood ? 'true' : 'false'}
      </p>
      <div>
        <button onClick={setCountToFive}>SET_COUNT -&gt 5</button>
        <button onClick={setTextToBye}>SET_TEXT -&gt bye</button>
        <button onClick={setColorToYellow}>SET_COLOR -&gt yellow</button>
        <button onClick={toggleGood}>TOGGLE_GOOD -&gt true or false</button>
      </div>
    </div>
  );
}

export default ReducerSample;

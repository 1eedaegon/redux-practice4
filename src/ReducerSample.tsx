import { useSampleDispatch, useSampleState } from './SampleContext';

function ReducerSample() {
  const state = useSampleState();
  const dispatch = useSampleDispatch();
  const increaseCount = () =>
    dispatch({ type: 'SET_COUNT', count: state.count + 1 });
  const decreaseCount = () =>
    dispatch({ type: 'SET_COUNT', count: state.count - 1 });
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'Confirmed' });
  const setColor = () => dispatch({ type: 'SET_COLOR', color: 'blud' });
  const toggleIsGood = () => dispatch({ type: 'TOGGLE_ISGOOD' });
  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>Is good?: </code> {state.isGood ? 'good' : 'not good'}
      </p>
      <div>
        <button onClick={increaseCount}>Increase cnt</button>
        <button onClick={decreaseCount}>Increase cnt</button>
        <button onClick={setText}>Set confirmed</button>
        <button onClick={setColor}>Change to blue</button>
        <button onClick={toggleIsGood}>Toggle is good</button>
      </div>
    </div>
  );
}
export default ReducerSample;

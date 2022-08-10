import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodoApp from './containers/TodoApp';

const App: React.FC = () => {
  return (
    <div>
      <TodoApp />;
      <CounterContainer />
    </div>
  );
  // return <ReducerSample />;
};

export default App;

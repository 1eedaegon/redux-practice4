import React from 'react';
import CounterContainer from './containers/CounterContainer';
import GithubProfileLoader from './containers/GithubProfileLoader';
import TodoApp from './containers/TodoApp';

const App: React.FC = () => {
  return (
    <div>
      <GithubProfileLoader />
      {/* <TodoApp />;
      <CounterContainer /> */}
    </div>
  );
  // return <ReducerSample />;
};

export default App;

import React from 'react';
import Counter from './Counter';
import Greetings from './greetings';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';

const App: React.FC = () => {
  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  );

  // return <ReducerSample />;
};

export default App;

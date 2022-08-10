import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({ todos, counter });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

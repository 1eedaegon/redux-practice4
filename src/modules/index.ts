import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import github, { githubSaga } from './github';
import { all } from '@redux-saga/core/effects';

const rootReducer = combineReducers({ todos, counter, github });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([githubSaga()]);
}

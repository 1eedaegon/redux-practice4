import { call, put } from '@redux-saga/core/effects';
import { AsyncActionCreatorBuilder, PayloadAction } from 'typesafe-actions';

type PromiseCreatorFunction<P, T> =
  | ((payload: P) => Promise<T>)
  | (() => Promise<T>);

// User-defined type guard
function isPayloadAction<P>(action: any): action is PayloadAction<string, P> {
  return action.payload !== undefined;
}

export default function createAsyncSaga<T1, P1, T2, P2, T3, P3>(
  asyncActionCreator: AsyncActionCreatorBuilder<
    [T1, [P1, undefined]],
    [T2, [P2, undefined]],
    [T3, [P3, undefined]]
  >,
  promiseCreator: PromiseCreatorFunction<P1, P2>
) {
  return function* saga(action: ReturnType<typeof asyncActionCreator.request>) {
    try {
      const result = isPayloadAction<P1>(action)
        ? yield call(promiseCreator, action.payload)
        : yield call(promiseCreator);
      yield put(asyncActionCreator.success(result));
    } catch (err: any) {
      yield put(asyncActionCreator.failure(err));
    }
  };
}

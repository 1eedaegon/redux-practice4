import { AnyAction } from 'redux';
import { AsyncActionCreatorBuilder, getType } from 'typesafe-actions';

export type AsyncState<T, E = any> = {
  loading: boolean;
  data: T | null;
  error: E | null;
};
export const asyncState = {
  initial: <T, E = any>(initialData?: T): AsyncState<T, E> => ({
    loading: false,
    data: initialData || null,
    error: null,
  }),
  load: <T, E = any>(data?: T): AsyncState<T, E> => ({
    loading: true,
    data: data || null,
    error: null,
  }),
  success: <T, E = any>(data?: T): AsyncState<T, E> => ({
    loading: false,
    data: data || null,
    error: null,
  }),
  failure: <T, E>(error: E): AsyncState<T, E> => ({
    loading: false,
    data: null,
    error,
  }),
};

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;
export function createAsyncReducer<
  S,
  AC extends AnyAsyncActionCreator,
  K extends keyof S
>(anyActionCreator: AC, key: K) {
  return (state: S, action: AnyAction) => {
    const [request, success, failure] = [
      anyActionCreator.request,
      anyActionCreator.success,
      anyActionCreator.failure,
    ].map(getType);
    switch (action.type) {
      case request:
        return {
          ...state,
          [key]: asyncState.load(),
        };
      case success:
        return {
          ...state,
          [key]: asyncState.success(action.payload),
        };
      case failure:
        return {
          ...state,
          [key]: asyncState.failure(action.payload),
        };
      default:
        return state;
    }
  };
}

export function transformToArray<AC extends AnyAsyncActionCreator>(
  asyncActionCreator: AC
) {
  const { request, success, failure } = asyncActionCreator;
  return [request, success, failure];
}

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

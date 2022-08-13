import { ActionType, createReducer, createAction } from 'typesafe-actions';
// Actions types
// const INCREASE = 'counter/INCREASE';
// const DECREASE = 'counter/DECREASE';
// const INCREASE_BY = 'counter/INCREASE_BY';

// Counter actions
// If use typesafe-actions, Can define action type directly
export const increase = createAction('counter/INCREASE')();
export const decrease = createAction('counter/DECREASE')();
export const increase_by = createAction('counter/INCREASE_BY')<number>(); // payload type: number

// Make actiotns object
const actions = { increase, decrease, increase_by };
type CounterAction = ActionType<typeof actions>;

// Define type of counter state
type CounterState = { count: number };
// Initialize state
const initialState: CounterState = { count: 0 };

// Refactor => function chaining
const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, (state) => ({ count: state.count + 1 }))
  .handleAction(decrease, (state) => ({ count: state.count - 1 }))
  .handleAction(increase_by, (state, action) => ({
    count: state.count + action.payload,
  }));
// const counter = createReducer<CounterState, CounterAction>(initialState, {
//   [INCREASE]: (state) => ({ count: state.count + 1 }),
//   [DECREASE]: (state) => ({ count: state.count - 1 }),
//   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
// });

export default counter;
// const INCREASE = 'counter/INCREASE' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// export const increase_by = (diff: number) => ({
//   type: INCREASE_BY,
//   payload: diff,
// });

// type CounterAction =
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increase_by>;
// type CounterState = { count: number };

// const initialState: CounterState = { count: 0 };

// function counter(
//   state: CounterState = initialState,
//   action: CounterAction
// ): CounterState {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }
// export default counter;

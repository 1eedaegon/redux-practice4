const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increase_by = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

function counter() {}
export default counter;

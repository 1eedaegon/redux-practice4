import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { getUserProfile } from '../../api/github';
import { getUserProfileAsync } from './actions';
import { GithubProfileAction } from './types';

export function getUserProfileThunk(
  username: string
): ThunkAction<Promise<void>, RootState, null, GithubProfileAction> {
  return async (dispatch) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e: any) {
      dispatch(failure(e));
    }
  };
}

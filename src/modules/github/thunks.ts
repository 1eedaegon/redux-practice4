import { getUserProfile } from '../../api/github';
import createAsyncThunk from '../../lib/createAsyncThunk';
import { getUserProfileAsync } from './actions';

export const getUserProfileThunk = createAsyncThunk(
  getUserProfileAsync,
  getUserProfile
);

// export function getUserProfileThunk(
//   username: string
// ): ThunkAction<Promise<void>, RootState, null, GithubProfileAction> {
//   return async (dispatch) => {
//     const { request, success, failure } = getUserProfileAsync;
//     dispatch(request());
//     try {
//       const userProfile = await getUserProfile(username);
//       dispatch(success(userProfile));
//     } catch (e: any) {
//       dispatch(failure(e));
//     }
//   };
// }

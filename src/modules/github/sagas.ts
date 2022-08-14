import { call, put, takeEvery } from '@redux-saga/core/effects';
import { getUserProfile, GithubProfile } from '../../api/github';
import { getUserProfileAsync, GET_USER_PROFILE } from './actions';

function* getUserProfileSaga(
  action: ReturnType<typeof getUserProfileAsync.request>
) {
  try {
    const userProfile: GithubProfile = yield call(
      getUserProfile,
      action.payload
    );
    yield put(getUserProfileAsync.success(userProfile));
  } catch (err: any) {
    yield put(getUserProfileAsync.failure(err));
  }
}
export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}

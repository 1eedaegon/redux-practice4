import { createReducer } from 'typesafe-actions';
import { asyncState } from '../../lib/reducerUtils';
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_ERROR,
  GET_USER_PROFILE_SUCESS,
} from './actions';
import { GithubProfileAction, GithubProfileState } from './types';

const initialState: GithubProfileState = {
  userProfile: asyncState.initial(),
};

const githubProfile = createReducer<GithubProfileState, GithubProfileAction>(
  initialState,
  {
    [GET_USER_PROFILE]: (state) => ({
      ...state,
      userProfile: asyncState.load(),
    }),
    [GET_USER_PROFILE_SUCESS]: (state, action) => ({
      ...state,
      userProfile: asyncState.success(action.payload),
    }),
    [GET_USER_PROFILE_ERROR]: (state, action) => ({
      ...state,
      userProfile: asyncState.failure(action.payload),
    }),
  }
);

export default githubProfile;

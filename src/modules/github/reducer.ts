import { createReducer } from 'typesafe-actions';
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_ERROR,
  GET_USER_PROFILE_SUCESS,
} from './actions';
import { GithubProfileAction, GithubProfileState } from './types';

const initialState: GithubProfileState = {
  userProfile: {
    loading: false,
    error: null,
    data: null,
  },
};

const githubProfile = createReducer<GithubProfileState, GithubProfileAction>(
  initialState,
  {
    [GET_USER_PROFILE]: (state) => ({
      ...state,
      userProfile: { loading: true, error: null, data: null },
    }),
    [GET_USER_PROFILE_SUCESS]: (state, action) => ({
      ...state,
      userProfile: { loading: false, error: null, data: action.payload },
    }),
    [GET_USER_PROFILE_ERROR]: (state, action) => ({
      ...state,
      userProfile: { loading: false, error: action.payload, data: null },
    }),
  }
);

export default githubProfile;

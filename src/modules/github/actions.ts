import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCESS = 'github/GET_USER_PROFILE_SUCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCESS,
  GET_USER_PROFILE_ERROR
)<string, GithubProfile, AxiosError>();
// export const getUserProfile = createAction(GET_USER_PROFILE)();
// export const getUserProfileSucess = createAction(
//   GET_USER_PROFILE_SUCESS
// )<GithubProfile>();
// export const getUserProfileError = createAction(
//   GET_USER_PROFILE_ERROR
// )<AxiosError>();

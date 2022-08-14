import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AsyncState } from '../../lib/reducerUtils';

export type GithubProfileAction = ActionType<typeof actions>;
export type GithubProfileState = {
  userProfile: AsyncState<GithubProfile, Error>;
};

// Jsend format
// export type GithubProfileState = {
//   userProfile: {
//     loading: boolean;
//     error: Error | null;
//     data: GithubProfile | null;
//   };
// };

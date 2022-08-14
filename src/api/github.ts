import axios from 'axios';

export async function getUserProfile(username: string) {
  const response = await axios.get<GithubProfile>(
    `https://api.github.com/users/${username}`
  );
  return response.data;
}

export interface GithubProfile {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: null;
  email: null;
  hireable: null;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}
// export interface GithubProfile {
//   login: '1eedaegon';
//   id: 37583495;
//   node_id: 'MDQ6VXNlcjM3NTgzNDk1';
//   avatar_url: 'https://avatars.githubusercontent.com/u/37583495?v=4';
//   gravatar_id: '';
//   url: 'https://api.github.com/users/1eedaegon';
//   html_url: 'https://github.com/1eedaegon';
//   followers_url: 'https://api.github.com/users/1eedaegon/followers';
//   following_url: 'https://api.github.com/users/1eedaegon/following{/other_user}';
//   gists_url: 'https://api.github.com/users/1eedaegon/gists{/gist_id}';
//   starred_url: 'https://api.github.com/users/1eedaegon/starred{/owner}{/repo}';
//   subscriptions_url: 'https://api.github.com/users/1eedaegon/subscriptions';
//   organizations_url: 'https://api.github.com/users/1eedaegon/orgs';
//   repos_url: 'https://api.github.com/users/1eedaegon/repos';
//   events_url: 'https://api.github.com/users/1eedaegon/events{/privacy}';
//   received_events_url: 'https://api.github.com/users/1eedaegon/received_events';
//   type: 'User';
//   site_admin: false;
//   name: 'Gon';
//   company: null;
//   blog: '';
//   location: 'Anywhere you want';
//   email: null;
//   hireable: null;
//   bio: 'Software developer';
//   twitter_username: null;
//   public_repos: 81;
//   public_gists: 22;
//   followers: 29;
//   following: 35;
//   created_at: '2018-03-20T13:01:51Z';
//   updated_at: '2022-07-26T11:05:47Z';
// }

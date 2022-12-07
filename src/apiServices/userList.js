import {get} from './apiBase';

export function fetchUser() {
  return get('users');
}

export function fetchUserDetails(id) {
  return get(`users/${id}`);
}

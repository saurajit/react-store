import {get} from './apiBase';

export function fetchPosts() {
  return get('posts');
}

export function fetchPostDetails(id) {
  return get(`posts/${id}`);
}
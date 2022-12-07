import axios from 'axios';

const apiBase = 'https://jsonplaceholder.typicode.com/';

const getUrl = suffix => apiBase + suffix;

export function get(url) {
  return axios.get(getUrl(url))
}

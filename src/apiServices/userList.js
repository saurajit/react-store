import axios from 'axios';

const apiBase = 'https://jsonplaceholder.typicode.com/';

const getUrl = suffix => apiBase + suffix; 

export function fetchUser() {
  return axios.get(getUrl('users'))
}

export function fetchUserDetails(id) {
  return axios.get(`${getUrl('users')}/${id}`)
}
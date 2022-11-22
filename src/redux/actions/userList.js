export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';
export const FETCH_USER_STATE = 'FETCH_USER_STATE';

export const fetchUsers = () => ({
  type: FETCH_USERS
});

export const fetchUserSuccess = userList => ({
  type: FETCH_USER_SUCCESS,
  payload: userList
});

export const fetchUserError = error => ({
  type: FETCH_USER_FAIL,
  payload: error
});

export const fetchUserState = isPending => ({
  type: FETCH_USER_STATE,
  payload: isPending
});

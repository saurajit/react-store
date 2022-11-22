export const FETCH_USER_DETAILS = 'FETCH_USER_DETAILS';
export const FETCH_USER_DETAILS_SUCCESS = 'FETCH_USER_DETAILS_SUCCESS';
export const FETCH_USER_DETAILS_FAIL = 'FETCH_USER_DETAILS_FAIL';
export const FETCH_USER_DETAILS_STATE = 'FETCH_USER_DETAILS_STATE';

export const fetchUserDetails = (userId) => ({
  type: FETCH_USER_DETAILS,
  payload: userId
});

export const fetchUserDetailSuccess = user => ({
  type: FETCH_USER_DETAILS_SUCCESS,
  payload: user
});

export const fetchUserDetailError = error => ({
  type: FETCH_USER_DETAILS_FAIL,
  payload: error
});

export const fetchUserDetailState = isPending => ({
  type: FETCH_USER_DETAILS_STATE,
  payload: isPending
});

import { FETCH_USERS, FETCH_USER_SUCCESS, FETCH_USER_FAIL, FETCH_USER_STATE } from "../actions/userList";

const initialState = {
  users: [],
  isPending: false,
  hasError: false,
  errorMessage: null
}

export const userList = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      state = {...state, users: [], hasError: false, errorMessage: null, isPending: true};
      return state;
    case FETCH_USER_SUCCESS:
      state = {...state, users: payload || [], isPending: false};
      return state;
    case FETCH_USER_FAIL:
      state = {...state, users: [], hasError: true, errorMessage: payload, isPending: false};
      return state;
    case FETCH_USER_STATE:
      state = {...state, isPending: payload};
      return state;
    default:
      return state;
  }
}

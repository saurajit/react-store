import { FETCH_USER_DETAILS, FETCH_USER_DETAILS_STATE, FETCH_USER_DETAILS_SUCCESS, FETCH_USER_DETAILS_FAIL } from "../actions/userDetails";

const initialState = {
  user: {},
  isPending: false,
  hasError: false,
  errorMessage: null
}

export const userDetails = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_DETAILS:
      state = {...state, user: payload, hasError: false, errorMessage: null, isPending: true};
      return state;
    case FETCH_USER_DETAILS_SUCCESS:
      state = {...state, user: payload || {}, isPending: false};
      return state;
    case FETCH_USER_DETAILS_FAIL:
      state = {...state, user: {}, hasError: true, errorMessage: payload, isPending: false};
      return state;
    case FETCH_USER_DETAILS_STATE:
      state = {...state, isPending: payload};
      return state;
    default:
      return state;
  }
}

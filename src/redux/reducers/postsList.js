import { RESET_POSTS, FETCH_POST_SUCCESS, FETCH_POST_FAIL, FETCH_POST_STATE } from '../actions/postsList';

const initialState = {
  posts: [],
  isPending: false,
  hasError: false,
  errorMessage: null
}

export const postsList = (state = initialState, { type, payload }) => {
  switch (type) {
    case RESET_POSTS:
      state = {...state, posts: [], hasError: false, errorMessage: null, isPending: true};
      return state;
    case FETCH_POST_SUCCESS:
      state = {...state, posts: payload || [], hasError: false, errorMessage: null, isPending: false};
      return state;
      case FETCH_POST_FAIL:
      state = {...state, posts: [], hasError: true, errorMessage: payload, isPending: false};
      return state;
    case FETCH_POST_STATE:
      state = {...state, isPending: payload};
      return state;
    default:
      return state;
  }
}

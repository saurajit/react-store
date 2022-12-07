import {fetchPosts} from '../../apiServices/apiPosts';

export const RESET_POSTS = 'RESET_POSTS';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAIL = 'FETCH_POST_FAIL';
export const FETCH_POST_STATE = 'FETCH_POST_STATE';

export const resetPosts = () => ({
  type: RESET_POSTS
});

export const fetchPostSuccess = userList => ({
  type: FETCH_POST_SUCCESS,
  payload: userList
});

export const fetchPostError = error => ({
  type: FETCH_POST_FAIL,
  payload: error
});

export const fetchPostState = isPending => ({
  type: FETCH_POST_STATE,
  payload: isPending
});

export const loadPosts = () => (
    function (dispatch) {
        dispatch(resetPosts());
        fetchPosts()
        .then(response => {
            dispatch(fetchPostSuccess(response.data));
            dispatch(fetchPostState(false));
        })
        .catch(error => {
            dispatch(fetchPostError(error.message));
            dispatch(fetchPostState(false));
        });
    }
);

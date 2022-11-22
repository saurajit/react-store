import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USER_DETAILS, FETCH_USER_DETAILS_SUCCESS, FETCH_USER_DETAILS_FAIL } from '../redux/actions/userDetails';
import {fetchUserDetails as api} from '../apiServices/userList';

// worker Saga: will be fired on USER_FETCH_REQUE STED actions
function* fetchUserDetails(action) {
  try {
    const response = yield call(api, action.payload);
    yield put({ type: FETCH_USER_DETAILS_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: FETCH_USER_DETAILS_FAIL, payload: e.message });
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* userDetailsSaga() {
  yield takeLatest(FETCH_USER_DETAILS, fetchUserDetails);
}

export default userDetailsSaga;
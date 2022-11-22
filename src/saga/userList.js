import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USERS, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from '../redux/actions/userList';
import {fetchUser as api} from '../apiServices/userList';

// worker Saga: will be fired on USER_FETCH_REQUE STED actions
function* fetchUser(action) {
  try {
    const response = yield call(api, action);
    yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: FETCH_USER_FAIL, payload: e.message });
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* userListSaga() {
  yield takeLatest(FETCH_USERS, fetchUser);
}

export default userListSaga;
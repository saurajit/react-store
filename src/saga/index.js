import { all } from 'redux-saga/effects'
import userListSaga from './userList'
import userDetailsSaga from './userDetails'


export default function* rootSaga() {
  yield all([userListSaga(), userDetailsSaga()])
}
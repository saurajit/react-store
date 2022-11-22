import { combineReducers} from 'redux';
import { userList } from './usersList';
import { userDetails } from './userDetails';

const reducers = {
  userList,
  userDetails
};

export const rootReducer = combineReducers(reducers);

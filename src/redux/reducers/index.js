import { combineReducers} from 'redux';
import { userList } from './usersList';
import { postsList } from './postsList';
import { userDetails } from './userDetails';

const reducers = {
  userList,
  userDetails,
  postsList
};

export const rootReducer = combineReducers(reducers);

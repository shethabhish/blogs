import { combineReducers } from 'redux';
import PostReducer from './postReducer';
import userReducers from './userReducers';

export default combineReducers({
  posts: PostReducer,
  users: userReducers,
});

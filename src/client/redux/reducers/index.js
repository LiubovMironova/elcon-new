import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appReducer from './app-reducer';
import userReducer from './user-reducer';
import postReducer from './post-reducer';

const reducers = history => combineReducers({
  router: connectRouter(history),
  app: appReducer,
  user: userReducer,
  post: postReducer
});

export default reducers;

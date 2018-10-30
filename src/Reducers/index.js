import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import movieReducer from './movieReducer';
import {createAccountDisplayReducer} from './createAccountReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  user: loginReducer,
  createAccountDisplay: createAccountDisplayReducer
})

export default rootReducer;

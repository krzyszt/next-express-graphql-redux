/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux-immutable'
import { reducer as toastrReducer } from 'react-redux-toastr';

/**
 * Inserting application reducers
 */
// import auth from './auth.reducer';
// import app from './app.reducer';

/**
 * Creates the main reducer
 */
export default () => combineReducers({
  toastr: toastrReducer
});
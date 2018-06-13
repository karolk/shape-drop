import { combineReducers } from 'redux';

import app from './app';
import desk from './desk';
import shapes from './shapes';

const rootReducer = combineReducers({
  app,
  desk,
  shapes
});

export default rootReducer;
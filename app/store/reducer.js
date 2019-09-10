/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import session from './session';
import chat from './chat';

export default combineReducers({
  session,
  chat,
});

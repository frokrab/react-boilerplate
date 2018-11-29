import { fromJS } from 'immutable';

import {
  CHANGE_INPUT,
  SAVE_NOTE,
  SAVE_NOTE_SUCCESS,
  SAVE_NOTE_FAILURE,
} from './constants';

export const initialState = fromJS({
  input: '',
  loading: false,
  error: false,
});

const homeReducer = (state = initialState, action) => {
  if (action.type === CHANGE_INPUT) {
    return state.set('input', action.input);
  }
  if (action.type === SAVE_NOTE) {
    return state.set('loading', true).set('error', false);
  }
  if (action.type === SAVE_NOTE_SUCCESS) {
    return state
      .set('loading', false)
      .set('error', false)
      .set('input', '');
  }
  if (action.type === SAVE_NOTE_FAILURE) {
    return state.set('loading', false).set('error', action.error);
  }
  return state;
};

export default homeReducer;

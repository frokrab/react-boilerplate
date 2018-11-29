import { fromJS } from 'immutable';

import {
  CHANGE_INPUT,
  GET_NOTES,
  GET_NOTES_SUCCESS,
  GET_NOTES_FAILURE,
} from './constants';

export const initialState = fromJS({
  input: '',
  notes: [],
  loading: false,
  error: false,
});

const homeReducer = (state = initialState, action) => {
  if (action.type === CHANGE_INPUT) {
    return state.set('input', action.input);
  }
  if (action.type === GET_NOTES) {
    return state.set('loading', true).set('error', false);
  }
  if (action.type === GET_NOTES_SUCCESS) {
    return state.set('loading', false).set('notes', action.notes);
  }
  if (action.type === GET_NOTES_FAILURE) {
    return state.set('loading', false).set('error', action.error);
  }
  return state;
};

export default homeReducer;

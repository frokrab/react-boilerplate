import { fromJS } from 'immutable';

import { GET_NOTES, GET_NOTES_SUCCESS, GET_NOTES_FAILURE } from './constants';

export const initialState = fromJS({
  notes: [],
  loading: false,
  error: false,
});

const allNotesReducer = (state = initialState, action) => {
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

export default allNotesReducer;

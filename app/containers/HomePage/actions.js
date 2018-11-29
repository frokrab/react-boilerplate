import {
  CHANGE_INPUT,
  SAVE_NOTE,
  SAVE_NOTE_SUCCESS,
  SAVE_NOTE_FAILURE,
} from './constants';

export const changeInput = input => ({
  type: CHANGE_INPUT,
  input,
});

export const saveNote = () => ({
  type: SAVE_NOTE,
});

export const saveNoteSuccess = () => ({
  type: SAVE_NOTE_SUCCESS,
});

export const saveNoteFailure = error => ({
  type: SAVE_NOTE_FAILURE,
  error,
});

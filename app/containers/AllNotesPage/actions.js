import { GET_NOTES, GET_NOTES_SUCCESS, GET_NOTES_FAILURE } from './constants';

export const getNotes = () => ({
  type: GET_NOTES,
});

export const getNotesSuccess = notes => ({
  type: GET_NOTES_SUCCESS,
  notes,
});

export const getNotesFailure = error => ({
  type: GET_NOTES_FAILURE,
  error,
});

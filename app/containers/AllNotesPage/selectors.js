import { createSelector } from 'reselect';

import { initialState } from './reducer';

export const selectAllNotes = state => state.get('allNotes', initialState);

export const makeSelectNotes = () =>
  createSelector(selectAllNotes, allNotesState => allNotesState.get('notes'));

export const makeSelectLoading = () =>
  createSelector(selectAllNotes, allNotesState => allNotesState.get('loading'));

export const makeSelectError = () =>
  createSelector(selectAllNotes, allNotesState => allNotesState.get('error'));

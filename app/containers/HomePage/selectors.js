import { createSelector } from 'reselect';

import { initialState } from './reducer';

export const selectHome = state => state.get('home', initialState);

export const makeSelectInput = () =>
  createSelector(selectHome, homeState => homeState.get('input'));

export const makeSelectLoading = () =>
  createSelector(selectHome, homeState => homeState.get('loading'));

export const makeSelectError = () =>
  createSelector(selectHome, homeState => homeState.get('error'));

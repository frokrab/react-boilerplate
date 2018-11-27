import { createSelector } from 'reselect';

import { initialState } from './reducer';

export const selectHome = state => state.get('home', initialState);

export const makeSelectInput = () =>
  createSelector(selectHome, homeState => homeState.get('input'));

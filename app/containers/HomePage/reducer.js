import { fromJS } from 'immutable';

import { CHANGE_INPUT } from './constants';

export const initialState = fromJS({
  input: '',
});

const homeReducer = (state = initialState, action) => {
  if (action.type === CHANGE_INPUT) {
    return state.set('input', action.input);
  }
  return state;
};

export default homeReducer;

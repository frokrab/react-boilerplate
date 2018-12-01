import {
  CHANGE_INPUT,
  SAVE_NOTE,
  SAVE_NOTE_SUCCESS,
  SAVE_NOTE_FAILURE,
} from '../constants';

import {
  changeInput,
  saveNote,
  saveNoteSuccess,
  saveNoteFailure,
} from '../actions';

describe('HomePage actions', () => {
  describe('changeInput', () => {
    it('should return an action object with correct type and input', () => {
      const input = 'testing';
      const expected = {
        type: CHANGE_INPUT,
        input,
      };
      expect(changeInput(input)).toEqual(expected);
    });
  });
  describe('saveNote', () => {
    it('should return an action object with correct type', () => {
      const expected = {
        type: SAVE_NOTE,
      };
      expect(saveNote()).toEqual(expected);
    });
  });
  describe('saveNoteSuccess', () => {
    it('should return an action object with correct type', () => {
      const expected = {
        type: SAVE_NOTE_SUCCESS,
      };
      expect(saveNoteSuccess()).toEqual(expected);
    });
  });
  describe('saveNoteFailure', () => {
    it('should return an action object with correct type', () => {
      const error = 'error';
      const expected = {
        type: SAVE_NOTE_FAILURE,
        error,
      };
      expect(saveNoteFailure(error)).toEqual(expected);
    });
  });
});

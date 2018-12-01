import { put, takeLatest } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import saveNoteWatcherSaga, { saveNoteSaga } from '../saga';
import { saveNoteSuccess, saveNoteFailure } from '../actions';
import { SAVE_NOTE } from '../constants';

describe('HomePage saga', () => {
  describe('saveNoteSaga', () => {
    const saga = cloneableGenerator(saveNoteSaga)();
    saga.next();
    saga.next();
    it('should dispatch saveNoteSuccess on success', () => {
      const successSaga = saga.clone();
      expect(successSaga.next().value).toEqual(put(saveNoteSuccess()));
    });
    it('should dispatch saveNoteFailure on error', () => {
      const failureSaga = saga.clone();
      expect(failureSaga.throw().value).toEqual(put(saveNoteFailure()));
    });
  });
  describe('saveNoteWatcherSaga', () => {
    const saga = saveNoteWatcherSaga();
    it('should run the saveNoteSaga when a saveNote action is dispatched', () => {
      expect(saga.next().value).toEqual(takeLatest(SAVE_NOTE, saveNoteSaga));
    });
  });
});

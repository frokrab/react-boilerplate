import axios from 'axios';
import { put, call, takeLatest, select } from 'redux-saga/effects';

import { SAVE_NOTE } from './constants';
import { saveNoteFailure, saveNoteSuccess } from './actions';
import { makeSelectInput } from './selectors';

const saveNote = input => axios.post('/notes', { input });

function* saveNoteSaga() {
  try {
    const note = yield select(makeSelectInput());
    yield call(saveNote, note);
    yield put(saveNoteSuccess());
  } catch (error) {
    yield put(saveNoteFailure(error));
  }
}

export default function* saveNoteWatcherSaga() {
  yield takeLatest(SAVE_NOTE, saveNoteSaga);
}

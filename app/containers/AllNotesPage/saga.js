import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

import { GET_NOTES } from './constants';
import { getNotesSuccess, getNotesFailure } from './actions';

const fetchNotes = () => axios.get('/notes');

function* getNotesSaga() {
  try {
    const response = yield call(fetchNotes);
    const notes = response.data.rows;
    yield put(getNotesSuccess(notes));
  } catch (error) {
    yield put(getNotesFailure(error));
  }
}

export default function* getNotesWatcherSaga() {
  yield takeLatest(GET_NOTES, getNotesSaga);
}

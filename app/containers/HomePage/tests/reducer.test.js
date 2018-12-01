import reducer from '../reducer';
import {
  changeInput,
  saveNote,
  saveNoteSuccess,
  saveNoteFailure,
} from '../actions';

describe('HomePage reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });
  it('handles changeInput action', () => {
    const input = 'testing';
    expect(reducer(undefined, changeInput(input))).toMatchSnapshot();
  });
  it('handles saveNote action', () => {
    expect(reducer(undefined, saveNote())).toMatchSnapshot();
  });
  it('handles saveNoteSuccess action', () => {
    expect(reducer(undefined, saveNoteSuccess())).toMatchSnapshot();
  });
  it('handles saveNoteFailure action', () => {
    const error = 'error';
    expect(reducer(undefined, saveNoteFailure(error))).toMatchSnapshot();
  });
});

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import NotesList from './NotesList';
import NotesListEntry from './NotesListEntry';
import { getNotes } from './actions';
import {
  makeSelectNotes,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class AllNotesPage extends React.PureComponent {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div>
        <NotesList>
          {this.props.notes.map(note => (
            <NotesListEntry key={note.id}>{note.note}</NotesListEntry>
          ))}
        </NotesList>
        <Link to="/">Add More Notes</Link>
      </div>
    );
  }
}

AllNotesPage.propTypes = {
  getNotes: PropTypes.func,
  notes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapDispatchToProps = dispatch => ({
  getNotes: () => dispatch(getNotes()),
});

const mapStateToProps = createStructuredSelector({
  notes: makeSelectNotes(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'allNotes', saga });

const withReducer = injectReducer({ key: 'allNotes', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AllNotesPage);

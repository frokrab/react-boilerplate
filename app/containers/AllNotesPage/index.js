import React from 'react';

import NotesList from './NotesList';
import NotesListEntry from './NotesListEntry';

/* eslint-disable react/prefer-stateless-function */
export default class AllNotesPage extends React.PureComponent {
  render() {
    return (
      <NotesList>
        <NotesListEntry>
          {JSON.stringify("here's my first note")}
        </NotesListEntry>
        <NotesListEntry>
          {JSON.stringify('and this would be my second')}
        </NotesListEntry>
        <NotesListEntry>
          {JSON.stringify('this should be a third one right here')}
        </NotesListEntry>
      </NotesList>
    );
  }
}

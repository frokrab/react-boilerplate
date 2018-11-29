import React from 'react';
import NotesList from './NotesList';

/* eslint-disable react/prefer-stateless-function */
export default class AllNotesPage extends React.PureComponent {
  render() {
    return (
      <NotesList>
        <li>this is where a note should go</li>
      </NotesList>
    );
  }
}

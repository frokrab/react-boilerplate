/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import messages from './messages';
import Input from './Input';
import Form from './Form';
import Submit from './Submit';
import { changeInput, getNotes } from './actions';
import {
  makeSelectInput,
  makeSelectNotes,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Form>
          <Input
            placeholder="enter your note here"
            value={this.props.input}
            onChange={this.props.onChangeInput}
          />
          <Submit type="submit" value="Save" onClick={this.props.getNotes} />
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onChangeInput: event => dispatch(changeInput(event.target.value)),
  getNotes: event => {
    event.preventDefault();
    dispatch(getNotes());
  },
});

const mapStateToProps = createStructuredSelector({
  input: makeSelectInput(),
  notes: makeSelectNotes(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'home', saga });

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);

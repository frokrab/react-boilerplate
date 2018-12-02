import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import { HomePage } from '../index';
import messages from '../messages';
import Form from '../Form';
import Input from '../Input';
import Submit from '../Submit';

describe('<HomePage />', () => {
  const mockSubmit = jest.fn();
  const mockChangeInput = jest.fn();
  const renderedComponent = shallow(
    <HomePage
      saveNote={mockSubmit}
      input="testing"
      onChangeInput={mockChangeInput}
      loading={false}
    />,
  );
  it('should render the page message', () => {
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });
  it('should render a Form', () => {
    const form = (
      <Form onSubmit={mockSubmit}>
        <Input
          placeholder="enter your note here"
          value="testing"
          onChange={mockChangeInput}
        />
        <Submit type="submit" value="Save" disabled={false} />
      </Form>
    );
    expect(renderedComponent.contains(form)).toEqual(true);
  });
  it('should render a Link', () => {
    const link = <Link to="/all-notes">All Notes</Link>;
    expect(renderedComponent.contains(link)).toEqual(true);
  });
  it('should update input on change', () => {
    renderedComponent.find('Input').simulate('change');
    expect(mockChangeInput).toHaveBeenCalled();
  });
  it('should save note on submit', () => {
    renderedComponent.find('Form').simulate('submit');
    expect(mockSubmit).toHaveBeenCalled();
  });
});

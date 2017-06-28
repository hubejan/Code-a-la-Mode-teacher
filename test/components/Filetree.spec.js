import React from 'react';
import { mount } from 'enzyme';
import Filetree from '../../app/components/Filetree';
import { getUsername } from '../../app/actions/filetree-actions';

const dispatchGetUsername = () => getUsername();

describe('Filetree component', () => {
  it('calls getUsername from dispatchGetUsername from componentDidMount', () => {
    const mockGetUsername = jest.fn(dispatchGetUsername);
    mount(<Filetree dispatchGetUsername={mockGetUsername} />);
    expect(mockGetUsername).toHaveBeenCalled();
  });
});

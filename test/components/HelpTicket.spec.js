import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HelpTicket from '../../app/components/HelpTicket';

describe('HelpTicket component', () => {
  const testTicket1 = { id: 1, question: 'is this question being rendered?' };
  const component = shallow(<HelpTicket ticket={testTicket1} />);

  it('should receive a ticket object in props', () => {
    expect(component.instance().props.ticket).toBe(testTicket1);
  });

  it('should display the a ticket question', () => {
    const tree = renderer
      .create(
        <div>
          <pre>{`${testTicket1.question}`}</pre>
        </div>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

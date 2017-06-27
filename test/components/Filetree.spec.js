import { spy } from 'sinon';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Filetree from '../../app/components/Filetree';
import { loadFile } from '../../app/actions/filetree-actions';

// function setup() {
//   const actions = {
//     loadInEditor: spy(),
//     dispatchGetUsername: spy()
//   };
//   const component = shallow(<Filetree {...actions} />);
//   return {
//     component,
//     actions
//   };
// }
describe('Filetree component', () => {
  it('calls componentDidMount', () => {
    spy(Filetree.prototype, 'componentDidMount');
    const wrapper = mount(<Filetree />);
    expect(Filetree.prototype.componentDidMount.calledOnce).to.equal(true);
  });
  // it('should receive a ticket object in props', () => {
  //   expect(component.instance().props.ticket).toBe(testTicket1);
  // });
  // it('should receive a changeEditor function in props', () => {
  //   expect(loadFile).toHaveBeenCalled();
  // });
});

// boilerplate test changed to skip- keep for reference
describe.skip('Counter component', () => {
  it('should should display count', () => {
    const { p } = setup();
    expect(p.text()).toMatch(/^1$/);
  });

  it('should first button should call increment', () => {
    const { buttons, actions } = setup();
    buttons.at(0).simulate('click');
    expect(actions.increment.called).toBe(true);
  });

  it('should match exact snapshot', () => {
    const { actions } = setup();
    const tree = renderer
      .create(
        <div>
          <Router>
            <Filetree {...actions} />
          </Router>
        </div>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should second button should call decrement', () => {
    const { buttons, actions } = setup();
    buttons.at(1).simulate('click');
    expect(actions.decrement.called).toBe(true);
  });

  it('should third button should call incrementIfOdd', () => {
    const { buttons, actions } = setup();
    buttons.at(2).simulate('click');
    expect(actions.incrementIfOdd.called).toBe(true);
  });

  it('should fourth button should call incrementAsync', () => {
    const { buttons, actions } = setup();
    buttons.at(3).simulate('click');
    expect(actions.incrementAsync.called).toBe(true);
  });
});

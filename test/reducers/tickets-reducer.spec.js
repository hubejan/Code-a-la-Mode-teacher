import ticketsReducer from '../../app/reducers/tickets-reducer';
import * as actionCreators from '../../app/actions/tickets-actions';

// snapshot testing requires some diligence in checking that your first snapshot
// is producing exactly what you expect it to
describe('tickets reducer', () => {
  const testTicket1 = { id: 1, question: 'is the first ticket here?' };
  const testTicket2 = { id: 2, question: 'is this ticket reducer test passing?' };
  const testTicket3 = { id: 3, question: 'is three too many?' };

  const testInitialState = {
    selectedTicket: {},
    [testTicket1.id]: testTicket1,
    [testTicket2.id]: testTicket2
  };

  it('should handle initial state', () => {
    expect(ticketsReducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle ADD_TICKET', () => {
    const addAction = actionCreators.add(testTicket3);
    expect(ticketsReducer(testInitialState, addAction)).toMatchSnapshot();
  });

  it('should handle SELECT_TICKET', () => {
    const selectAction = actionCreators.select(testTicket1);
    expect(ticketsReducer(testInitialState, selectAction)).toMatchSnapshot();
  });

  it('should handle REMOVE_TICKET', () => {
    const removeAction = actionCreators.remove(testTicket1);
    expect(ticketsReducer(testInitialState, removeAction)).toMatchSnapshot();
  });
});

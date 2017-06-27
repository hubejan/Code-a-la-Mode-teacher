// @flow
import { ADD_TICKET, SELECT_TICKET, REMOVE_TICKET } from '../actions/tickets-actions';
import type { ticketType } from '../actions/tickets-actions';

// breaking down flow syntax:
// state can have a selectedTicket property that is either {} or a ticket
// state is an object that will be used as a map
//   this map can have numbers as keys (ticket_id is for semantic documentation)
//   this map can have values of ticketType
export type ticketsStateType = {
  selectedTicket: {} | ticketType,
  [ticket_id: string | number]: ticketType
};

type addAction = { type: 'ADD_TICKET', id: number, ticket: ticketType };
type selectAction = { type: 'SELECT_TICKET', id: number };
type removeAction = { type: 'REMOVE_TICKET', id: number };

type ticketAction =
  | addAction
  | selectAction
  | removeAction
  | { type: $Subtype<string> };
  // $Subtype<string> prevents runtime flow errors from init-related redux actions
  // { type: string } would our more specific action types less useful, but this
  // subtype will let us have nice action typing for different switch cases

// dummy tickets for testing the view
const ticket1 = {
  id: 1,
  question: 'How Can Mirrors Be Real If Our Eyes Arent Real.'
};

const ticket2 = {
  id: 2,
  question: 'What are tests???'
};

const defaultTickets = {
  selectedTicket: {},
  [ticket1.id]: ticket1,
  [ticket2.id]: ticket2
};

function ticketsReducer(state: ticketsStateType = defaultTickets, action: ticketAction) {
  switch (action.type) {
    case ADD_TICKET:
      return {
        ...state,
        [action.id]: action.ticket
      };
    case SELECT_TICKET:
      return {
        ...state,
        selectedTicket: action.id ? state[action.id] : {}
      };
    case REMOVE_TICKET:
      return {
        ...state,
        [action.id]: undefined
      };
    default:
      return state;
  }
}

export default ticketsReducer;

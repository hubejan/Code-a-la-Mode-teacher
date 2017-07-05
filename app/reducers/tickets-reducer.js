// @flow
import { ADD_TICKET, SELECT_TICKET, REMOVE_TICKET } from '../actions/tickets-actions';
import type { ticketType } from '../actions/tickets-actions';

// breaking down flow syntax:
// state can have a selectedTicket property that is either {} or a ticket
// allTickets is an array of tickets
export type ticketsStateType = {
  selectedTicket: {} | ticketType,
  allTickets: Array<ticketType>
};

type addAction = { type: 'ADD_TICKET', ticket: ticketType };
type selectAction = { type: 'SELECT_TICKET' };
type removeAction = { type: 'REMOVE_TICKET', ticket: ticketType };

type ticketAction =
  | addAction
  | selectAction
  | removeAction
  | { type: $Subtype<string> };
  // $Subtype<string> prevents runtime flow errors from init-related redux actions
  // { type: string } would make our more specific action types less useful, but this
  // subtype will let us have nice action typing for different switch cases

const test1 = {
  question: 'Short question?'
};

const test2 = {
  question: 'How can anyone even go far as to look like a long question?'
};

const defaultTickets = {
  selectedTicket: {},
  allTickets: [test1, test2]
};

function ticketsReducer(state: ticketsStateType = defaultTickets, action: ticketAction) {
  switch (action.type) {
    case ADD_TICKET:
      return {
        ...state,
        allTickets: [...state.allTickets, action.ticket]
      };
    case SELECT_TICKET:
      return {
        ...state,
        selectedTicket: action.ticket
      };
    case REMOVE_TICKET:
      return {
        ...state,
        allTickets: state.allTickets.reduce((tickets, ticket) => {
          return ticket.question === action.ticket.question // disadvantage of array implementation...
          ? tickets
          : [...tickets, ticket];
        }, [])
      };
    default:
      return state;
  }
}

export default ticketsReducer;

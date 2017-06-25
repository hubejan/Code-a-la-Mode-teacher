// @flow
import { ADD_TICKET, SELECT_TICKET, REMOVE_TICKET } from '../actions/tickets-actions';
import type { ticketType, ticketsType } from '../actions/tickets-actions';

type addAction = { type: typeof ADD_TICKET, id: number, ticket: ticketType };
type selectAction = { type: typeof SELECT_TICKET, id: number };
type removeAction = { type: typeof REMOVE_TICKET, id: number };

type Action =
  | addAction
  | selectAction
  | removeAction;

const defaultTickets = {
  selectedTicket: {}
};

export default function tickets(state: ticketsType = defaultTickets, action: Action) {
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
        state,
        [action.id]: undefined
      };
    default:
      return state;
  }
}
